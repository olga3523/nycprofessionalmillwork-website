const btnTogglerMobileMenu = document.querySelector('#togglerMobileMenu');

function togglerMobileMenu() {
  document.body.classList.toggle('menu-open');

  this.classList.toggle('i-close');
  this.classList.toggle('i-burger');
}

btnTogglerMobileMenu.addEventListener('click', togglerMobileMenu);
