document.documentElement.classList.remove('no-js');

/* ---------------------------------------------------------
   Small helpers
   --------------------------------------------------------- */
function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  }
  children.forEach(c => c && node.appendChild(c));
  return node;
}

/* ---------------------------------------------------------
   Render: Hero + About
   --------------------------------------------------------- */
function renderProfile() {
  document.title = `${profile.fullName} — ${profile.role}`;

  document.getElementById('meta-description')?.setAttribute('content', profile.bio);

  document.getElementById('hero-status-text').textContent = `STATUS: ${profile.status}`;
  document.getElementById('hero-role-line').textContent = `${profile.role} · ${profile.subrole}`;
  document.getElementById('hero-bio').textContent = profile.bio;
  document.getElementById('term-location').textContent = profile.location;

  document.getElementById('about-lede').textContent = profile.bio;
  document.getElementById('about-location').textContent = profile.location;

  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   Render: Ventures
   --------------------------------------------------------- */
function renderVentures() {
  const wrap = document.getElementById('venture-grid');
  wrap.innerHTML = '';
  ventures.forEach(v => {
    const chips = v.stack.map(tag => el('span', { class: 'chip', text: tag }));
    const card = el('div', { class: 'venture-card' }, [
      el('div', { class: 'venture-top' }, [
        el('span', { class: 'venture-tag', text: `#${v.tag}` }),
        el('span', { class: 'status-pill', text: v.status }),
      ]),
      el('h3', { text: v.name }),
      el('p', { class: 'venture-role', text: v.role }),
      el('p', { class: 'desc', text: v.desc }),
      el('div', { class: 'chip-row' }, chips),
      el('a', { class: 'venture-link', text: `${v.cta} ↗`, attrs: { href: v.url, target: '_blank', rel: 'noopener' } }),
    ]);
    wrap.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Render: Skills
   --------------------------------------------------------- */
function renderSkills() {
  const wrap = document.getElementById('skills-grid');
  wrap.innerHTML = '';
  skills.forEach(s => {
    wrap.appendChild(el('div', { class: 'skill-card' }, [
      el('div', { class: 'sk-name', text: s.name }),
      el('div', { class: 'sk-note', text: s.note }),
    ]));
  });
}

/* ---------------------------------------------------------
   Render: Projects
   --------------------------------------------------------- */
function renderProjects() {
  const wrap = document.getElementById('project-list');
  wrap.innerHTML = '';
  projects.forEach(p => {
    const chips = p.tags.map(tag => el('span', { class: 'chip', text: tag }));
    const card = el('div', { class: 'project-card' }, [
      el('div', { class: 'project-icon', text: p.icon }),
      el('div', {}, [
        el('h3', { text: p.name }),
        el('p', { text: p.desc }),
        el('div', { class: 'chip-row' }, chips),
      ]),
      el('a', { class: 'venture-link', text: 'Code ↗', attrs: { href: p.url, target: '_blank', rel: 'noopener' } }),
    ]);
    wrap.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Render: Accomplishments log
   --------------------------------------------------------- */
function renderAccomplishments() {
  const wrap = document.getElementById('log-groups');
  wrap.innerHTML = '';
  Object.entries(accomplishments).forEach(([group, items]) => {
    const lines = items.map(item => el('div', { class: 'log-line' }, [
      el('span', { class: 'tag', text: item.y ? item.y : '—' }),
      el('span', { class: 'txt', text: item.text }),
    ]));
    wrap.appendChild(el('div', { class: 'log-group' }, [
      el('h3', { class: 'log-group-title', text: `[ ${group} ]` }),
      ...lines,
    ]));
  });
}

/* ---------------------------------------------------------
   Render: Gallery
   --------------------------------------------------------- */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const empty = document.getElementById('gallery-empty');
  grid.innerHTML = '';

  if (!galleryPhotos.length) {
    empty.style.display = 'block';
    grid.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = 'grid';
  galleryPhotos.forEach(src => {
    grid.appendChild(el('div', { class: 'gallery-item' }, [
      el('img', { attrs: { src, alt: 'Photograph by Deo Pasco Jr. — FLT Collective', loading: 'lazy' } }),
    ]));
  });
}

/* ---------------------------------------------------------
   Render: Socials
   --------------------------------------------------------- */
function renderSocials() {
  const wrap = document.getElementById('social-list');
  wrap.innerHTML = '';
  socials.forEach(s => {
    wrap.appendChild(el('a', { class: 'social-row', attrs: { href: s.url, target: '_blank', rel: 'noopener' } }, [
      el('span', { class: 's-label', text: s.label }),
      el('span', { class: 's-handle', text: s.handle }),
    ]));
  });
}

/* ---------------------------------------------------------
   Contact form — builds a mailto: link (no backend on a static site)
   --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-alert');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showAlert('All fields are required.', false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailtoLink = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    showAlert('Opening your email app to send this to Deo…', true);
  });

  function showAlert(text, ok) {
    alertBox.textContent = text;
    alertBox.className = `alert ${ok ? 'alert-ok' : 'alert-err'}`;
    alertBox.style.display = 'block';
  }
}

/* ---------------------------------------------------------
   Boot sequence
   --------------------------------------------------------- */
function initBoot() {
  const screen = document.getElementById('boot-screen');
  const log = document.getElementById('boot-log');
  if (!screen || !log) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    { t: 'DEO_OS v1.0 — initializing session', cls: '' },
    { t: 'loading profile ......... deo_pasco_jr', cls: 'dim' },
    { t: 'mounting /ventures ....... 3P_IT, FLT_COLLECTIVE', cls: 'dim' },
    { t: 'checking skills.log ...... OK', cls: 'ok' },
    { t: 'starting index.html ...... OK', cls: 'ok' },
    { t: 'welcome, visitor.', cls: '' },
  ];

  if (reduceMotion) {
    screen.classList.add('hidden');
    return;
  }

  log.innerHTML = '';
  let delay = 0;
  lines.forEach(line => {
    const lineEl = el('div', { class: `line ${line.cls}`, text: line.t });
    lineEl.style.animationDelay = delay + 'ms';
    log.appendChild(lineEl);
    delay += 220;
  });
  log.appendChild(el('span', { class: 'cursor-blink' }));

  setTimeout(() => screen.classList.add('hidden'), delay + 500);
}

/* ---------------------------------------------------------
   Mobile nav toggle
   --------------------------------------------------------- */
function initNav() {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderVentures();
  renderSkills();
  renderProjects();
  renderAccomplishments();
  renderGallery();
  renderSocials();
  initContactForm();
  initNav();
  initBoot();
});
