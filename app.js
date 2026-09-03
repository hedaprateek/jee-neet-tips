(function () {
  'use strict';

  // ---------------------------------------------------------------- state
  // Every dimension is multi-select. An empty set means "no restriction".
  const state = {
    exam: new Set(),
    subject: new Set(),
    cls: new Set(),
    type: new Set(),
    topic: new Set(),
    q: '',
    group: true,
  };

  const DIMENSIONS = ['exam', 'subject', 'cls', 'type', 'topic'];

  const TYPE_LABEL = { mnemonic: 'Mnemonic', shortcut: 'Shortcut', formula: 'Formula table' };
  const CLS_LABEL = { '9-10': 'Class 9-10', '11-12': 'Class 11-12' };

  const el = {
    grid: document.getElementById('grid'),
    resultCount: document.getElementById('resultCount'),
    search: document.getElementById('searchInput'),
    clearAll: document.getElementById('clearAll'),
    activeCount: document.getElementById('activeCount'),
    topicPanel: document.getElementById('topicChips'),
    topicToggle: document.getElementById('topicToggle'),
    groupToggle: document.getElementById('groupToggle'),
  };

  // ------------------------------------------------------- option universe
  // Topic names are not globally unique — Physics and Chemistry both have a
  // "Thermodynamics" chapter — so topics are keyed as "Subject::Topic".
  const topicKey = (item) => `${item.subject}::${item.topic}`;
  const topicName = (key) => key.split('::')[1];

  const uniq = (arr) => [...new Set(arr)];
  const ALL = {
    exam: ['JEE', 'NEET'],
    subject: ['Physics', 'Chemistry', 'Maths', 'Biology'],
    cls: ['9-10', '11-12'],
    type: ['mnemonic', 'shortcut', 'formula'],
    topic: uniq(TRICKS.map(topicKey)).sort(),
  };

  function labelFor(dim, value) {
    if (dim === 'type') return TYPE_LABEL[value];
    if (dim === 'cls') return CLS_LABEL[value];
    if (dim === 'topic') return topicName(value);
    return value;
  }

  // ------------------------------------------------------------- matching
  // `skip` lets us compute faceted counts: how many items a chip would yield
  // given every OTHER active filter.
  function itemMatches(item, skip) {
    if (skip !== 'exam' && state.exam.size && ![...state.exam].some((e) => item.exam.includes(e))) return false;
    if (skip !== 'subject' && state.subject.size && !state.subject.has(item.subject)) return false;
    if (skip !== 'cls' && state.cls.size && !state.cls.has(item.cls)) return false;
    if (skip !== 'type' && state.type.size && !state.type.has(item.type)) return false;
    if (skip !== 'topic' && state.topic.size && !state.topic.has(topicKey(item))) return false;
    if (state.q && !haystack(item).includes(state.q.toLowerCase())) return false;
    return true;
  }

  const haystackCache = new WeakMap();
  function haystack(item) {
    if (!haystackCache.has(item)) {
      const text = [item.title, item.topic, item.subject, item.type, item.body || '']
        .concat(item.exam)
        .concat((item.rows || []).flat())
        .join(' ')
        .replace(/<[^>]+>/g, ' ')
        .toLowerCase();
      haystackCache.set(item, text);
    }
    return haystackCache.get(item);
  }

  function facetCount(dim, value) {
    return TRICKS.filter((item) => {
      if (!itemMatches(item, dim)) return false;
      if (dim === 'exam') return item.exam.includes(value);
      if (dim === 'topic') return topicKey(item) === value;
      return item[dim] === value;
    }).length;
  }

  // ------------------------------------------------------------ rendering
  function chip(dim, value, count) {
    const btn = document.createElement('button');
    const active = state[dim].has(value);
    btn.className = 'chip' + (active ? ' active' : '') + (count === 0 && !active ? ' chip-empty' : '');
    btn.setAttribute('aria-pressed', String(active));
    btn.innerHTML = `${labelFor(dim, value)}<span class="chip-count">${count}</span>`;
    btn.addEventListener('click', () => {
      state[dim].has(value) ? state[dim].delete(value) : state[dim].add(value);
      // Dropping a subject shouldn't leave its topics stranded in the filter.
      if (dim === 'subject') pruneTopics();
      render();
    });
    return btn;
  }

  function pruneTopics() {
    if (!state.subject.size) return;
    [...state.topic].forEach((key) => {
      if (!state.subject.has(key.split('::')[0])) state.topic.delete(key);
    });
  }

  function renderChipGroup(containerId, dim, values) {
    const wrap = document.getElementById(containerId);
    wrap.innerHTML = '';
    values.forEach((v) => wrap.appendChild(chip(dim, v, facetCount(dim, v))));
  }

  // Topics are scoped to the selected subjects so the list stays usable.
  function visibleTopics() {
    const pool = state.subject.size ? TRICKS.filter((t) => state.subject.has(t.subject)) : TRICKS;
    const bySubject = {};
    pool.forEach((t) => {
      (bySubject[t.subject] = bySubject[t.subject] || new Set()).add(topicKey(t));
    });
    return ALL.subject
      .filter((s) => bySubject[s])
      .map((s) => ({ subject: s, topics: [...bySubject[s]].sort((a, b) => topicName(a).localeCompare(topicName(b))) }));
  }

  function renderTopics() {
    el.topicPanel.innerHTML = '';
    visibleTopics().forEach(({ subject, topics }) => {
      const block = document.createElement('div');
      block.className = 'topic-block';
      const head = document.createElement('div');
      head.className = 'topic-block-label';
      head.textContent = subject;
      block.appendChild(head);
      const row = document.createElement('div');
      row.className = 'topic-row';
      topics.forEach((t) => row.appendChild(chip('topic', t, facetCount('topic', t))));
      block.appendChild(row);
      el.topicPanel.appendChild(block);
    });
  }

  function cardHTML(item) {
    const badges = [
      `<span class="badge badge-type-${item.type}">${TYPE_LABEL[item.type]}</span>`,
      ...item.exam.map((e) => `<span class="badge badge-exam badge-exam-${e.toLowerCase()}">${e}</span>`),
      `<span class="badge badge-subject">${item.subject} · ${item.cls}</span>`,
    ].join('');

    const body = item.type === 'formula' && item.rows
      ? `<table class="rows-table">${item.rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`
      : `<div class="body">${item.body}</div>`;

    return `<article class="card">
      <div class="card-tags">${badges}</div>
      <div class="topic">${item.topic}</div>
      ${item.title ? `<h3>${item.title}</h3>` : ''}
      ${body}
    </article>`;
  }

  function renderResults() {
    const found = TRICKS.filter((item) => itemMatches(item, null));
    el.resultCount.textContent = `${found.length} tip${found.length === 1 ? '' : 's'}`;

    if (!found.length) {
      el.grid.innerHTML = `<div class="empty-state">
        <p>Nothing matches this combination.</p>
        <button class="btn-inline" id="emptyReset">Clear all filters</button>
      </div>`;
      document.getElementById('emptyReset').addEventListener('click', resetAll);
      return;
    }

    if (!state.group) {
      el.grid.className = 'grid';
      el.grid.innerHTML = found.map(cardHTML).join('');
      return;
    }

    // Grouped view: subject, then topic.
    el.grid.className = 'grouped';
    const bySubject = new Map();
    found.forEach((item) => {
      if (!bySubject.has(item.subject)) bySubject.set(item.subject, new Map());
      const topics = bySubject.get(item.subject);
      if (!topics.has(item.topic)) topics.set(item.topic, []);
      topics.get(item.topic).push(item);
    });

    let html = '';
    ALL.subject.forEach((subject) => {
      if (!bySubject.has(subject)) return;
      const topics = bySubject.get(subject);
      const total = [...topics.values()].reduce((n, a) => n + a.length, 0);
      html += `<section class="subject-section">
        <h2 class="subject-heading">${subject}<span class="heading-count">${total}</span></h2>`;
      [...topics.keys()].sort().forEach((topic) => {
        html += `<h3 class="topic-heading">${topic}</h3>
          <div class="grid">${topics.get(topic).map(cardHTML).join('')}</div>`;
      });
      html += `</section>`;
    });
    el.grid.innerHTML = html;
  }

  function renderActiveSummary() {
    const n = DIMENSIONS.reduce((sum, d) => sum + state[d].size, 0) + (state.q ? 1 : 0);
    el.activeCount.textContent = n ? `${n} active` : '';
    el.clearAll.hidden = n === 0;
  }

  function render() {
    renderChipGroup('examChips', 'exam', ALL.exam);
    renderChipGroup('subjectChips', 'subject', ALL.subject);
    renderChipGroup('classChips', 'cls', ALL.cls);
    renderChipGroup('typeChips', 'type', ALL.type);
    renderTopics();
    renderActiveSummary();
    renderResults();
    syncHash();
  }

  function resetAll() {
    DIMENSIONS.forEach((d) => state[d].clear());
    state.q = '';
    el.search.value = '';
    render();
  }

  // ------------------------------------------------------------ URL state
  function syncHash() {
    const parts = [];
    DIMENSIONS.forEach((d) => { if (state[d].size) parts.push(`${d}=${[...state[d]].map(encodeURIComponent).join(',')}`); });
    if (state.q) parts.push(`q=${encodeURIComponent(state.q)}`);
    const hash = parts.join('&');
    history.replaceState(null, '', hash ? `#${hash}` : location.pathname);
  }

  function readHash() {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    hash.split('&').forEach((pair) => {
      const [key, raw] = pair.split('=');
      if (!raw) return;
      if (key === 'q') { state.q = decodeURIComponent(raw); el.search.value = state.q; return; }
      if (!DIMENSIONS.includes(key)) return;
      raw.split(',').forEach((v) => {
        const value = decodeURIComponent(v);
        if (ALL[key].includes(value)) state[key].add(value);
      });
    });
  }

  // ------------------------------------------------------------- controls
  let searchTimer;
  el.search.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const value = e.target.value.trim();
    searchTimer = setTimeout(() => { state.q = value; render(); }, 120);
  });

  el.clearAll.addEventListener('click', resetAll);

  el.topicToggle.addEventListener('click', () => {
    const open = el.topicPanel.hidden;
    el.topicPanel.hidden = !open;
    el.topicToggle.setAttribute('aria-expanded', String(open));
    el.topicToggle.querySelector('.caret').textContent = open ? '▾' : '▸';
  });

  el.groupToggle.addEventListener('change', (e) => {
    state.group = e.target.checked;
    renderResults();
  });

  // ---------------------------------------------------------------- theme
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  function setThemeIcon(theme) { themeBtn.textContent = theme === 'dark' ? '☀' : '☾'; }
  try {
    const saved = localStorage.getItem('jnt-theme');
    if (saved === 'dark' || saved === 'light') { root.setAttribute('data-theme', saved); setThemeIcon(saved); }
    else setThemeIcon(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } catch (e) { /* storage unavailable */ }

  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    setThemeIcon(next);
    try { localStorage.setItem('jnt-theme', next); } catch (e) { /* ignore */ }
  });

  // ----------------------------------------------------------------- boot
  document.getElementById('statTotal').textContent = TRICKS.length;
  document.getElementById('statMnemonics').textContent = TRICKS.filter((t) => t.type === 'mnemonic').length;
  document.getElementById('statShortcuts').textContent = TRICKS.filter((t) => t.type === 'shortcut').length;
  document.getElementById('statTopics').textContent = ALL.topic.length;

  readHash();
  el.groupToggle.checked = state.group;
  render();
})();
