const navigationBlock = document.querySelector('#navigation');

function navigationToggler() {
  navigationBlock.classList.toggle('open-search-panel');
}

function navigationMain() {
  const openSearchForm = navigationBlock.querySelector('#open-search-form');
  const closeSearchForm = navigationBlock.querySelector('#close-search-form');

  openSearchForm.addEventListener('click', navigationToggler);
  closeSearchForm.addEventListener('click', navigationToggler);
}
