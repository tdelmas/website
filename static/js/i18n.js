(function() {
  let lang = window.navigator.userLanguage || window.navigator.language || 'en';
  lang = lang.substring(0,2).toLowerCase();
  let elems = document.querySelectorAll('[data-lang^="'+CSS.escape(lang)+'"]');
  elems.forEach( e => { e.style.display = "block"; });
})();
