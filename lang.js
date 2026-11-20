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
})();
