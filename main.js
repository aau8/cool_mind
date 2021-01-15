const burger = document.querySelector('.nav-burger');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
  body.classList.toggle('_menu_show');
})