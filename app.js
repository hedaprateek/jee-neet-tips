(function(){
  const state = {
    exam: 'All',      // All | JEE | NEET
    subject: 'All',   // All | Physics | Chemistry | Maths | Biology
    cls: 'All',       // All | 9-10 | 11-12
    type: 'All',      // All | mnemonic | shortcut | formula
    q: ''
  };

  const grid = document.getElementById('grid');
  const resultCount = document.getElementById('resultCount');
  const searchInput = document.getElementById('searchInput');

  const SUBJECTS_BY_EXAM = {
    All: ['All','Physics','Chemistry','Maths','Biology'],
    JEE: ['All','Physics','Chemistry','Maths'],
    NEET: ['All','Physics','Chemistry','Biology'],
  };

  function buildChipGroup(containerId, label, options, key){
    const wrap = document.getElementById(containerId);
    wrap.innerHTML = '';
    const lbl = document.createElement('span');
    lbl.className = 'group-label';
    lbl.textContent = label;
    wrap.appendChild(lbl);
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chip' + (state[key] === opt ? ' active' : '');
      btn.textContent = opt === 'All' ? 'All' : opt;
      btn.addEventListener('click', () => {
        state[key] = opt;
        if (key === 'exam') {
          const validSubjects = SUBJECTS_BY_EXAM[opt];
          if (!validSubjects.includes(state.subject)) state.subject = 'All';
          renderSubjectChips();
        }
        renderAll();
      });
      wrap.appendChild(btn);
    });
  }

  function renderSubjectChips(){
    buildChipGroup('subjectChips', 'Subject', SUBJECTS_BY_EXAM[state.exam], 'subject');
  }

  function renderFilters(){
    buildChipGroup('examChips', 'Exam', ['All','JEE','NEET'], 'exam');
    renderSubjectChips();
    buildChipGroup('classChips', 'Level', ['All','9-10','11-12'], 'cls');
    buildChipGroup('typeChips', 'Type', ['All','mnemonic','shortcut','formula'], 'type');
  }

  const TYPE_LABEL = { mnemonic: 'Mnemonic', shortcut: 'Shortcut', formula: 'Formula Table' };

  function matches(item){
    if (state.exam !== 'All' && !item.exam.includes(state.exam)) return false;
    if (state.subject !== 'All' && item.subject !== state.subject) return false;
    if (state.cls !== 'All' && item.cls !== state.cls) return false;
    if (state.type !== 'All' && item.type !== state.type) return false;
    if (state.q) {
      const q = state.q.toLowerCase();
      const haystack = [item.title, item.topic, item.subject, item.body || '']
        .concat((item.rows || []).flat())
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }

  function cardHTML(item){
    const examBadges = item.exam.map(e => `<span class="badge badge-exam">${e}</span>`).join('');
    const typeBadge = `<span class="badge badge-type-${item.type}">${TYPE_LABEL[item.type]}</span>`;
    const subjectBadge = `<span class="badge badge-subject">${item.subject} · ${item.cls}</span>`;

    let bodyHTML = '';
    if (item.type === 'formula' && item.rows) {
      bodyHTML = `<table class="rows-table">${item.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`;
    } else {
      bodyHTML = `<div class="body">${item.body}</div>`;
    }

    return `
      <article class="card">
        <div class="card-tags">${typeBadge}${examBadges}${subjectBadge}</div>
        <div class="topic">${item.topic}</div>
        ${item.title ? `<h3>${item.title}</h3>` : ''}
        ${bodyHTML}
      </article>
    `;
  }

  function renderCards(){
    const filtered = TRICKS.filter(matches);
    resultCount.textContent = `${filtered.length} tip${filtered.length === 1 ? '' : 's'} found`;
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">No tips match these filters yet — try clearing the search or a filter.</div>`;
      return;
    }
    grid.innerHTML = filtered.map(cardHTML).join('');
  }

  function renderAll(){
    renderFilters();
    renderCards();
  }

  searchInput.addEventListener('input', (e) => {
    state.q = e.target.value.trim();
    renderCards();
  });

  // Theme toggle
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  function applyStoredTheme(){
    try {
      const saved = localStorage.getItem('jnt-theme');
      if (saved === 'dark' || saved === 'light') {
        root.setAttribute('data-theme', saved);
        themeBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
      }
    } catch (e) { /* ignore */ }
  }
  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    try { localStorage.setItem('jnt-theme', next); } catch (e) { /* ignore */ }
  });
  applyStoredTheme();

  // Stats
  document.getElementById('statTotal').textContent = TRICKS.length;
  document.getElementById('statSubjects').textContent = 4;

  renderAll();
})();
