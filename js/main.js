(function () {
  const html = document.documentElement;
  const buttons = document.querySelectorAll('[data-set-lang]');
  if (!buttons.length) return;

  const storageKey = 'alr-lang';
  const saved = localStorage.getItem(storageKey);
  const browserLang = (navigator.language || '').toLowerCase();
  const initial = saved || (browserLang.startsWith('ja') ? 'ja' : 'en');

  function setLang(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('data-current-lang', lang);
    localStorage.setItem(storageKey, lang);
    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  setLang(initial);
})();
