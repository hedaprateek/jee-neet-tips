(function () {
  'use strict';

  /* ------------------------------------------------------------------ state
     Every dimension is multi-select: an empty set means "no restriction".
     Values OR together within a dimension and AND across dimensions.        */
  const state = {
    exam: new Set(),
    subject: new Set(),
    cls: new Set(),
    type: new Set(),
    topic: new Set(),
    q: '',
    grouped: true,
  };

  const DIMENSIONS = ['exam', 'subject', 'cls', 'type', 'topic'];

  const TYPE_LABEL = { mnemonic: 'Mnemonics', shortcut: 'Shortcuts', formula: 'Formula tables' };
  const TYPE_TAG = { mnemonic: 'Mnemonic', shortcut: 'Shortcut', formula: 'Formula table' };
  const CLS_LABEL = { '9-10': 'Class 9-10', '11-12': 'Class 11-12' };

  /* Topic names are not globally unique — Physics and Chemistry both have a
     "Thermodynamics" chapter — so topics are keyed as "Subject::Topic".      */
  const topicKey = (item) => `${item.subject}::${item.topic}`;
  const topicName = (key) => key.split('::')[1];
  const topicSubject = (key) => key.split('::')[0];

  const uniq = (arr) => [...new Set(arr)];
  const ALL = {
    exam: ['JEE', 'NEET'],
    subject: ['Physics', 'Chemistry', 'Maths', 'Biology'],
    cls: ['9-10', '11-12'],
    type: ['mnemonic', 'shortcut', 'formula'],
    topic: uniq(TRICKS.map(topicKey)).sort(),
  };

  const el = {};
  ['searchInput', 'searchClear', 'clearAll', 'grid', 'resultCount', 'activePills',
   'examFilters', 'subjectFilters', 'classFilters', 'typeFilters', 'topicFilters',
   'topicSearch', 'chapterHint', 'viewGrouped', 'viewList', 'themeToggle',
   'drawerOpen', 'drawerClose', 'drawerScrim', 'drawerBadge', 'sidebar', 'toTop',
   'statTotal', 'statMnemonics', 'statShortcuts', 'statFormulas', 'statTopics',
  ].forEach((id) => { el[id] = document.getElementById(id); });

  // Chapter groups the user has explicitly collapsed/expanded.
  const openChapters = new Set();
  let chapterQuery = '';

  function labelFor(dim, value) {
    if (dim === 'type') return TYPE_LABEL[value];
    if (dim === 'cls') return CLS_LABEL[value];
    if (dim === 'topic') return topicName(value);
    return value;
  }

  /* -------------------------------------------------------------- matching */
  const haystackCache = new WeakMap();
  function haystack(item) {
    if (!haystackCache.has(item)) {
      haystackCache.set(item, [item.title, item.topic, item.subject, item.type, item.body || '']
        .concat(item.exam)
        .concat((item.rows || []).flat())
        .join(' ')
        .replace(/<[^>]+>/g, ' ')
        .toLowerCase());
    }
    return haystackCache.get(item);
  }

  // `skip` omits one dimension, which is how faceted counts are computed:
  // "how many results would this chip give, honouring every other filter".
  function itemMatches(item, skip) {
    if (skip !== 'exam' && state.exam.size && ![...state.exam].some((e) => item.exam.includes(e))) return false;
    if (skip !== 'subject' && state.subject.size && !state.subject.has(item.subject)) return false;
    if (skip !== 'cls' && state.cls.size && !state.cls.has(item.cls)) return false;
    if (skip !== 'type' && state.type.size && !state.type.has(item.type)) return false;
    if (skip !== 'topic' && state.topic.size && !state.topic.has(topicKey(item))) return false;
    if (state.q && !haystack(item).includes(state.q.toLowerCase())) return false;
    return true;
  }

  function facetCount(dim, value) {
    let n = 0;
    for (const item of TRICKS) {
      if (!itemMatches(item, dim)) continue;
      if (dim === 'exam' ? item.exam.includes(value)
        : dim === 'topic' ? topicKey(item) === value
        : item[dim] === value) n++;
    }
    return n;
  }

  function toggle(dim, value) {
    state[dim].has(value) ? state[dim].delete(value) : state[dim].add(value);
    if (dim === 'subject') pruneTopics();
    render();
  }

  function pruneTopics() {
    if (!state.subject.size) return;
    [...state.topic].forEach((key) => {
      if (!state.subject.has(topicSubject(key))) state.topic.delete(key);
    });
  }

  /* ------------------------------------------------------- sidebar filters */
  function filterRow(dim, value, count, opts) {
    const btn = document.createElement('button');
    const active = state[dim].has(value);
    btn.className = 'fitem' + (!count && !active ? ' is-empty' : '');
    btn.setAttribute('aria-pressed', String(active));
    btn.dataset.dim = dim;
    btn.dataset.value = value;
    const swatch = opts && opts.swatch ? `<span class="swatch swatch-${opts.swatch}"></span>` : '';
    btn.innerHTML = `<span class="fbox"></span>${swatch}` +
      `<span class="fname">${labelFor(dim, value)}</span>` +
      `<span class="fcount">${count}</span>`;
    btn.addEventListener('click', () => toggle(dim, value));
    return btn;
  }

  function renderList(container, dim, values, swatchFor) {
    container.innerHTML = '';
    values.forEach((v) => {
      container.appendChild(filterRow(dim, v, facetCount(dim, v),
        swatchFor ? { swatch: swatchFor(v) } : null));
    });
  }

  /* Chapter tree: chapters grouped under their subject, collapsible.
     Only subjects in play are listed, so selecting "Biology" trims the tree. */
  function renderChapters() {
    const pool = state.subject.size ? TRICKS.filter((t) => state.subject.has(t.subject)) : TRICKS;
    const bySubject = new Map();
    pool.forEach((t) => {
      if (!bySubject.has(t.subject)) bySubject.set(t.subject, new Set());
      bySubject.get(t.subject).add(topicKey(t));
    });

    const q = chapterQuery.toLowerCase();
    el.topicFilters.innerHTML = '';
    let visibleChapters = 0;

    ALL.subject.forEach((subject) => {
      if (!bySubject.has(subject)) return;
      let keys = [...bySubject.get(subject)].sort((a, b) => topicName(a).localeCompare(topicName(b)));
      if (q) keys = keys.filter((k) => topicName(k).toLowerCase().includes(q));
      if (!keys.length) return;
      visibleChapters += keys.length;

      const selectedHere = keys.filter((k) => state.topic.has(k)).length;
      // Auto-expand while searching, when a chapter here is selected, or when
      // this is the only subject in play.
      const expanded = openChapters.has(subject) || !!q || selectedHere > 0 || bySubject.size === 1;

      const group = document.createElement('div');
      group.className = 'chapter-group';

      const head = document.createElement('button');
      head.className = 'chapter-head';
      head.setAttribute('aria-expanded', String(expanded));
      head.innerHTML = `<span class="caret">▶</span><span class="fname">${subject}</span>` +
        `<span class="fcount">${selectedHere ? selectedHere + '/' : ''}${keys.length}</span>`;
      head.addEventListener('click', () => {
        openChapters.has(subject) ? openChapters.delete(subject) : openChapters.add(subject);
        renderChapters();
      });
      group.appendChild(head);

      const list = document.createElement('div');
      list.className = 'chapter-list';
      list.hidden = !expanded;
      keys.forEach((k) => list.appendChild(filterRow('topic', k, facetCount('topic', k))));
      group.appendChild(list);

      el.topicFilters.appendChild(group);
    });

    if (!visibleChapters) {
      el.topicFilters.innerHTML = `<p class="fgroup-hint" style="padding:6px 9px">No chapter matches “${chapterQuery}”.</p>`;
    }
    el.chapterHint.textContent = state.topic.size ? `${state.topic.size} selected` : '';
  }

  /* ------------------------------------------------------- active summary */
  function renderPills() {
    const entries = [];
    DIMENSIONS.forEach((dim) => state[dim].forEach((v) => entries.push({ dim, value: v })));

    el.activePills.innerHTML = '';
    entries.forEach(({ dim, value }) => {
      const pill = document.createElement('span');
      pill.className = 'pill';
      const text = dim === 'topic' ? `${topicSubject(value)}: ${topicName(value)}` : labelFor(dim, value);
      pill.innerHTML = `<span class="pill-label">${text}</span>`;
      const x = document.createElement('button');
      x.setAttribute('aria-label', `Remove filter ${text}`);
      x.textContent = '×';
      x.addEventListener('click', () => toggle(dim, value));
      pill.appendChild(x);
      el.activePills.appendChild(pill);
    });

    const active = entries.length + (state.q ? 1 : 0);
    el.clearAll.hidden = active === 0;
    el.drawerBadge.hidden = entries.length === 0;
    el.drawerBadge.textContent = entries.length;
    el.searchClear.hidden = !state.q;
  }

  /* -------------------------------------------------------------- results */
  function cardHTML(item) {
    const exams = item.exam
      .map((e) => `<span class="tag-exam tag-exam-${e.toLowerCase()}">${e}</span>`).join('');

    const body = item.type === 'formula' && item.rows
      ? `<table class="rows-table">${item.rows
          .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`
      : `<div class="body">${item.body}</div>`;

    return `<article class="card">
      <div class="card-meta">
        <span class="tag-type tag-type-${item.type}"><span class="dot"></span>${TYPE_TAG[item.type]}</span>
        <span class="meta-sep">•</span>
        ${exams}
        <span class="meta-dim">${item.cls === '9-10' ? 'Class 9-10' : 'Class 11-12'}</span>
      </div>
      ${item.title ? `<h3>${item.title}</h3>` : ''}
      ${body}
    </article>`;
  }

  function renderResults() {
    const found = TRICKS.filter((item) => itemMatches(item, null));
    el.resultCount.textContent = `${found.length} tip${found.length === 1 ? '' : 's'}`;

    if (!found.length) {
      el.grid.className = '';
      el.grid.innerHTML = `<div class="empty-state">
        <h3>No tips match this combination</h3>
        <p>Try removing a filter, or search for something else.</p>
        <button class="btn-primary" id="emptyReset">Clear all filters</button>
      </div>`;
      document.getElementById('emptyReset').addEventListener('click', resetAll);
      return;
    }

    if (!state.grouped) {
      el.grid.className = 'grid';
      el.grid.innerHTML = found.map(cardHTML).join('');
      return;
    }

    el.grid.className = 'grouped';
    const bySubject = new Map();
    found.forEach((item) => {
      if (!bySubject.has(item.subject)) bySubject.set(item.subject, new Map());
      const chapters = bySubject.get(item.subject);
      if (!chapters.has(item.topic)) chapters.set(item.topic, []);
      chapters.get(item.topic).push(item);
    });

    let html = '';
    ALL.subject.forEach((subject) => {
      if (!bySubject.has(subject)) return;
      const chapters = bySubject.get(subject);
      const total = [...chapters.values()].reduce((n, a) => n + a.length, 0);
      html += `<section class="subject-block">
        <div class="subject-bar"><h2>${subject}</h2><span class="tally">${total}</span></div>`;
      [...chapters.keys()].sort().forEach((chapter) => {
        html += `<div class="chapter-label">${chapter}</div>
          <div class="grid">${chapters.get(chapter).map(cardHTML).join('')}</div>`;
      });
      html += '</section>';
    });
    el.grid.innerHTML = html;
  }

  /* --------------------------------------------------------------- render */
  function render() {
    renderList(el.examFilters, 'exam', ALL.exam, (v) => v.toLowerCase());
    renderList(el.subjectFilters, 'subject', ALL.subject);
    renderList(el.classFilters, 'cls', ALL.cls);
    renderList(el.typeFilters, 'type', ALL.type, (v) => v);
    renderChapters();
    renderPills();
    renderResults();
    syncHash();
  }

  function resetAll() {
    DIMENSIONS.forEach((d) => state[d].clear());
    state.q = '';
    el.searchInput.value = '';
    render();
  }

  /* ------------------------------------------------------------ URL state */
  function syncHash() {
    const parts = [];
    DIMENSIONS.forEach((d) => {
      if (state[d].size) parts.push(`${d}=${[...state[d]].map(encodeURIComponent).join(',')}`);
    });
    if (state.q) parts.push(`q=${encodeURIComponent(state.q)}`);
    const hash = parts.join('&');
    history.replaceState(null, '', hash ? `#${hash}` : location.pathname);
  }

  function readHash() {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    hash.split('&').forEach((pair) => {
      const idx = pair.indexOf('=');
      if (idx < 0) return;
      const key = pair.slice(0, idx);
      const raw = pair.slice(idx + 1);
      if (key === 'q') { state.q = decodeURIComponent(raw); el.searchInput.value = state.q; return; }
      if (!DIMENSIONS.includes(key)) return;
      raw.split(',').forEach((v) => {
        const value = decodeURIComponent(v);
        if (ALL[key].includes(value)) state[key].add(value);
      });
    });
  }

  /* ------------------------------------------------------------- controls */
  let searchTimer;
  el.searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.q = value; render(); }, 130);
  });
  el.searchClear.addEventListener('click', () => {
    el.searchInput.value = ''; state.q = ''; render(); el.searchInput.focus();
  });

  el.topicSearch.addEventListener('input', (e) => {
    chapterQuery = e.target.value.trim();
    renderChapters();
  });

  el.clearAll.addEventListener('click', resetAll);

  function setView(grouped) {
    state.grouped = grouped;
    el.viewGrouped.setAttribute('aria-pressed', String(grouped));
    el.viewList.setAttribute('aria-pressed', String(!grouped));
    renderResults();
  }
  el.viewGrouped.addEventListener('click', () => setView(true));
  el.viewList.addEventListener('click', () => setView(false));

  /* Drawer (sidebar on small screens) */
  function setDrawer(open) {
    document.body.classList.toggle('drawer-open', open);
    el.drawerScrim.hidden = !open;
  }
  el.drawerOpen.addEventListener('click', () => setDrawer(true));
  el.drawerClose.addEventListener('click', () => setDrawer(false));
  el.drawerScrim.addEventListener('click', () => setDrawer(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setDrawer(false);
    // "/" focuses search, the way most doc sites behave.
    if (e.key === '/' && document.activeElement !== el.searchInput
        && document.activeElement !== el.topicSearch) {
      e.preventDefault(); el.searchInput.focus();
    }
  });

  /* Back-to-top */
  window.addEventListener('scroll', () => {
    el.toTop.hidden = window.scrollY < 600;
  }, { passive: true });
  el.toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------------------------------------------------------- theme */
  const root = document.documentElement;
  const setThemeIcon = (t) => { el.themeToggle.textContent = t === 'dark' ? '☀' : '☾'; };
  try {
    const saved = localStorage.getItem('jnt-theme');
    if (saved === 'dark' || saved === 'light') { root.setAttribute('data-theme', saved); setThemeIcon(saved); }
    else setThemeIcon(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } catch (e) { /* storage blocked */ }

  el.themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    setThemeIcon(next);
    try { localStorage.setItem('jnt-theme', next); } catch (e) { /* ignore */ }
  });

  /* ----------------------------------------------------------------- boot */
  const count = (type) => TRICKS.filter((t) => t.type === type).length;
  el.statTotal.textContent = TRICKS.length;
  el.statMnemonics.textContent = count('mnemonic');
  el.statShortcuts.textContent = count('shortcut');
  el.statFormulas.textContent = count('formula');
  el.statTopics.textContent = ALL.topic.length;
  el.searchInput.placeholder = `Search ${TRICKS.length} tips — “Krebs”, “Markovnikov”, “LIATE”…`;

  readHash();
  render();
})();
