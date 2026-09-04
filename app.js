(function () {
  'use strict';

  /* =====================================================================
     CONFIG — editable site strings. Change them here, not in the markup.
     ===================================================================== */
  const CONFIG = {
    siteUrl: 'hedaprateek.github.io/jee-neet-tips',
    sheetTitle: 'JEE / NEET Revision Sheet',
    credit: 'Stunity Tech — by Prateek',
  };

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
    // Tips ticked for the printable revision sheet. Survives filtering, so a
    // sheet can be built across several subjects in one sitting.
    selected: new Set(),
  };

  // Stable identity for a tip: titles are unique within a subject (enforced by
  // the data check), so this survives edits elsewhere in data.js.
  const keyOf = (item) => `${item.subject}::${item.title}`;

  const DIMENSIONS = ['exam', 'subject', 'cls', 'type', 'topic'];

  const TYPE_LABEL = { mnemonic: 'Mnemonics', shortcut: 'Shortcuts', formula: 'Formula tables', proof: 'Proofs' };
  const TYPE_TAG = { mnemonic: 'Mnemonic', shortcut: 'Shortcut', formula: 'Formula table', proof: 'Proof' };
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
    type: ['mnemonic', 'shortcut', 'formula', 'proof'],
    topic: uniq(TRICKS.map(topicKey)).sort(),
  };

  const el = {};
  ['searchInput', 'searchClear', 'clearAll', 'grid', 'resultCount', 'activePills',
   'examFilters', 'subjectFilters', 'classFilters', 'typeFilters', 'topicFilters',
   'topicSearch', 'chapterHint', 'viewGrouped', 'viewList', 'themeToggle',
   'drawerOpen', 'drawerClose', 'drawerScrim', 'drawerBadge', 'sidebar', 'toTop',
   'statTotal', 'statMnemonics', 'statShortcuts', 'statFormulas', 'statProofs', 'statTopics',
   'selectAll', 'selectBar', 'selCount', 'selNoun', 'selClear', 'btnDownload', 'btnPrint', 'printSheet',
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
      haystackCache.set(item, [item.title, item.topic, item.subject, item.type, item.body || '', item.claim || '']
        .concat(item.exam)
        .concat(item.steps || [])
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
      : item.type === 'proof' && item.steps
      ? (item.claim ? `<div class="proof-claim">${item.claim}</div>` : '') +
        `<ol class="proof-steps">${item.steps.map((s) => `<li>${s}</li>`).join('')}</ol>`
      : `<div class="body">${item.body}</div>`;

    const key = keyOf(item);
    const picked = state.selected.has(key);

    return `<article class="card${picked ? ' is-picked' : ''}">
      <button class="card-pick" data-key="${escapeAttr(key)}" aria-pressed="${picked}"
              title="Select for the print sheet" aria-label="Select “${escapeAttr(item.title)}” for the print sheet"></button>
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

  const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

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

  /* ------------------------------------------------- selection & printing */
  const visibleTips = () => TRICKS.filter((item) => itemMatches(item, null));
  const selectedTips = () => TRICKS.filter((item) => state.selected.has(keyOf(item)));

  function saveSelection() {
    try { localStorage.setItem('jnt-selected', JSON.stringify([...state.selected])); }
    catch (e) { /* storage blocked */ }
  }

  function loadSelection() {
    try {
      const raw = JSON.parse(localStorage.getItem('jnt-selected') || '[]');
      const valid = new Set(TRICKS.map(keyOf));
      raw.forEach((k) => { if (valid.has(k)) state.selected.add(k); });
    } catch (e) { /* ignore */ }
  }

  /* `pickEl` is the button that was clicked. Updating just that card beats
     re-rendering all 183 of them, and keeps the rest of the grid untouched. */
  function toggleSelection(key, pickEl) {
    state.selected.has(key) ? state.selected.delete(key) : state.selected.add(key);
    saveSelection();
    const on = state.selected.has(key);
    if (pickEl) {
      pickEl.setAttribute('aria-pressed', String(on));
      const card = pickEl.closest('.card');
      if (card) card.classList.toggle('is-picked', on);
    } else {
      renderResults();
    }
    renderSelectBar();
  }

  function allVisibleSelected() {
    const vis = visibleTips();
    return vis.length > 0 && vis.every((t) => state.selected.has(keyOf(t)));
  }

  function toggleSelectAll() {
    const vis = visibleTips();
    if (allVisibleSelected()) vis.forEach((t) => state.selected.delete(keyOf(t)));
    else vis.forEach((t) => state.selected.add(keyOf(t)));
    saveSelection();
    renderResults();
    renderSelectBar();
  }

  function clearSelection() {
    state.selected.clear();
    saveSelection();
    renderResults();
    renderSelectBar();
  }

  function renderSelectBar() {
    const n = state.selected.size;
    el.selCount.textContent = n;
    el.selNoun.textContent = n === 1 ? 'tip' : 'tips';
    el.selectBar.hidden = n === 0;
    document.body.classList.toggle('has-selection', n > 0);
    el.selectAll.textContent = allVisibleSelected() ? 'Deselect all' : 'Select all';
  }

  /* Strip the small amount of markup used in tip bodies down to plain text. */
  function toPlainText(html) {
    return String(html)
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
      .replace(/[ \t]+/g, ' ')
      .trim();
  }

  /* Group tips subject → chapter, preserving the site's subject order. */
  function groupForSheet(items) {
    const bySubject = new Map();
    items.forEach((item) => {
      if (!bySubject.has(item.subject)) bySubject.set(item.subject, new Map());
      const chapters = bySubject.get(item.subject);
      if (!chapters.has(item.topic)) chapters.set(item.topic, []);
      chapters.get(item.topic).push(item);
    });
    return ALL.subject
      .filter((s) => bySubject.has(s))
      .map((s) => ({
        subject: s,
        chapters: [...bySubject.get(s).entries()].sort((a, b) => a[0].localeCompare(b[0])),
      }));
  }

  function sheetTips() {
    const sel = selectedTips();
    return sel.length ? sel : visibleTips();
  }

  /* The sheet is meant to be carried and memorised, so it is built for density:
     one compact header line, subject headings only (chapter headings cost a
     line each and the titles already carry that context), and each tip's title
     running inline with its text rather than sitting on its own line. */
  function buildPrintSheet() {
    const items = sheetTips();
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    let html = `<div class="ps-head">
      <b>${CONFIG.sheetTitle}</b> · ${items.length} tip${items.length === 1 ? '' : 's'} · ${today} · ${CONFIG.siteUrl}
    </div>`;

    groupForSheet(items).forEach(({ subject, chapters }) => {
      html += `<h2 class="ps-subject">${subject}</h2>`;
      // Tips stay ordered by chapter, so related ones remain adjacent.
      chapters.forEach(([, tips]) => {
        tips.forEach((t) => {
          const head = `<div class="ps-tip"><span class="ps-tick"></span><b class="ps-title">${t.title}</b>`;
          if (t.type === 'formula' && t.rows) {
            html += head + `<table class="ps-rows">${t.rows
              .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>`;
          } else if (t.type === 'proof' && t.steps) {
            html += head + (t.claim ? ` <i>${t.claim}</i>` : '') +
              `<ol class="ps-steps">${t.steps.map((s) => `<li>${s}</li>`).join('')}</ol></div>`;
          } else {
            html += head + ` ${t.body}</div>`;
          }
        });
      });
    });

    html += `<div class="ps-foot">${CONFIG.credit}</div>`;
    el.printSheet.innerHTML = html;
  }

  /* Wrap to `width` columns, indenting continuation lines, so the file reads
     well in Notepad or on a phone without horizontal scrolling. */
  function wrap(text, width, indent, firstIndent) {
    const out = [];
    let line = firstIndent === undefined ? indent : firstIndent;
    let empty = true;
    toPlainText(text).split(' ').forEach((w) => {
      if (!empty && (line + ' ' + w).length > width) { out.push(line); line = indent + w; }
      else { line += (empty ? '' : ' ') + w; empty = false; }
    });
    if (!empty) out.push(line);
    return out;
  }

  function buildSheetText() {
    const items = sheetTips();
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const lines = [
      `${CONFIG.sheetTitle.toUpperCase()} · ${items.length} tip${items.length === 1 ? '' : 's'} · ${today}`,
      CONFIG.siteUrl,
      '',
    ];

    groupForSheet(items).forEach(({ subject, chapters }) => {
      lines.push(`${subject.toUpperCase()}`, '-'.repeat(subject.length), '');
      chapters.forEach(([, tips]) => {
        tips.forEach((t) => {
          // Titles can be long (a mnemonic sentence), so wrap them too — with a
          // hanging indent under the bullet, so the body below stays distinct.
          wrap(t.title, 76, '    ', '  * ').forEach((l) => lines.push(l));
          if (t.type === 'formula' && t.rows) {
            const labels = t.rows.map((r) => toPlainText(r[0]));
            const pad = Math.min(Math.max(...labels.map((l) => l.length)), 34);
            t.rows.forEach((r, i) => {
              const value = toPlainText(r[1]);
              const head = `     ${labels[i].padEnd(pad)}  =  `;
              // Keep the label and value on one line when it fits; wrap long
              // values under a hanging indent rather than overrunning.
              if ((head + value).length <= 78) lines.push(head + value);
              else wrap(value, 78, ' '.repeat(pad + 10), head).forEach((l) => lines.push(l));
            });
          } else if (t.type === 'proof' && t.steps) {
            if (t.claim) wrap(t.claim, 76, '     ').forEach((l) => lines.push(l));
            t.steps.forEach((s, i) => {
              const n = `${i + 1}.`.padEnd(3);
              wrap(s, 76, '        ', `     ${n} `).forEach((l) => lines.push(l));
            });
          } else {
            wrap(t.body, 76, '     ').forEach((l) => lines.push(l));
          }
          lines.push('');
        });
      });
    });

    lines.push('', CONFIG.credit);
    return lines.join('\n');
  }

  function downloadText() {
    const items = sheetTips();
    const blob = new Blob([buildSheetText()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jee-neet-revision-${items.length}-tips.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
    renderSelectBar();
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

  /* Selection — delegated, since cards are rendered as markup */
  el.grid.addEventListener('click', (e) => {
    const pick = e.target.closest && e.target.closest('.card-pick');
    if (pick) toggleSelection(pick.dataset.key, pick);
  });
  el.selectAll.addEventListener('click', toggleSelectAll);
  el.selClear.addEventListener('click', clearSelection);
  el.btnDownload.addEventListener('click', downloadText);
  el.btnPrint.addEventListener('click', () => { buildPrintSheet(); window.print(); });
  // Ctrl+P should produce the same compact sheet, not the whole app UI.
  window.addEventListener('beforeprint', buildPrintSheet);

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
  el.statProofs.textContent = count('proof');
  el.statTopics.textContent = ALL.topic.length;
  el.searchInput.placeholder = `Search ${TRICKS.length} tips — “Krebs”, “Markovnikov”, “LIATE”…`;

  readHash();
  loadSelection();
  render();

  // Test hook: lets the headless suite drive selection and inspect the sheet
  // builders without a real DOM. Harmless in the browser.
  window.__jnt = { state, keyOf, buildSheetText, sheetTips, toggleSelection, toggleSelectAll, clearSelection };
})();
