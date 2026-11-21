// Language switch: shows the blocks for one language, sets text direction, remembers the choice.
(function () {
  const langs = [...document.querySelectorAll('.langs button')].map(b => b.dataset.set);
  function set(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => el.classList.toggle('on', el.dataset.lang === lang));
    document.querySelectorAll('.langs button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.set === lang)));
    const rtl = lang === 'fa' || lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage may be blocked */ }
  }
  document.querySelectorAll('.langs button').forEach(b => b.addEventListener('click', () => set(b.dataset.set)));
  let start = langs[0];
  try { const saved = localStorage.getItem('lang'); if (langs.includes(saved)) start = saved; } catch (e) { /* ignore */ }
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (langs.includes(fromUrl)) start = fromUrl;
  set(start);

  // Referral code: ?ref=name on this page is passed on to the Tally form links,
  // so sign-ups can be counted per partner. Only letters, digits, - and _ are kept.
  let ref = (new URLSearchParams(location.search).get('ref') || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30);
  try {
    if (ref) localStorage.setItem('ref', ref); else ref = localStorage.getItem('ref') || '';
  } catch (e) { /* storage may be blocked */ }
  if (ref) {
    document.querySelectorAll('a[href^="https://tally.so/r/"]').forEach(a => {
      const u = new URL(a.href);
      u.searchParams.set('ref', ref);
      a.href = u.toString();
    });
  }
})();
