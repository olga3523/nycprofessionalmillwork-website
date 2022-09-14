const getDropDownItem = document.querySelectorAll('.combobox-menu .drop-down');

function openMenu() {
  this.classList.add('open');
}

function closeMenu() {
  this.classList.remove('open');
}

function toggleMenu() {
  this.classList.toggle('open');
}

function menuEvents() {
  getDropDownItem.forEach((menuItem) => {
    if (window.innerWidth < 768) {
      menuItem.removeEventListener('mouseenter', openMenu);
      menuItem.removeEventListener('mouseleave', closeMenu);

      menuItem.addEventListener('click', toggleMenu);
    } else {
      menuItem.removeEventListener('click', toggleMenu);

      menuItem.addEventListener('mouseenter', openMenu);
      menuItem.addEventListener('mouseleave', closeMenu);
    }
  });
}

menuEvents(getDropDownItem);

window.addEventListener('resize', menuEvents);
