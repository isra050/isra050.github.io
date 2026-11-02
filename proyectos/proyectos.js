(function () {
  var buttons = document.querySelectorAll('button[data-l]');
  var translatable = document.querySelectorAll('[data-es][data-en]');
  var current = 'es';
  try { current = localStorage.getItem('lang') || 'es'; } catch (e) {}
  if (current !== 'en') current = 'es';
  function setLanguage(lang) {
    current = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = current;
    try { localStorage.setItem('lang', current); } catch (e) {}
    for (var i = 0; i < translatable.length; i++) {
      translatable[i].textContent = translatable[i].getAttribute('data-' + current);
    }
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.toggle('on', buttons[j].getAttribute('data-l') === current);
    }
  }
  for (var k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener('click', function () { setLanguage(this.getAttribute('data-l')); });
  }
  setLanguage(current);
}());
