(function () {
  var headerWrapper = document.querySelector('.page-header__wrapper');
  var navToggle = document.querySelector('.page-header__toggle');

  headerWrapper.classList.remove('page-header__wrapper--nojs');
  if (headerWrapper.classList.contains('page-header__wrapper--menu-opened')) {
    headerWrapper.classList.remove('page-header__wrapper--menu-opened');
    headerWrapper.classList.add('page-header__wrapper--menu-closed');
  }

  navToggle.addEventListener('click', function () {
    if (headerWrapper.classList.contains('page-header__wrapper--menu-closed')) {
      headerWrapper.classList.remove('page-header__wrapper--menu-closed');
      headerWrapper.classList.add('page-header__wrapper--menu-opened');
    } else if (headerWrapper.classList.contains('page-header__wrapper--menu-opened')) {
      headerWrapper.classList.remove('page-header__wrapper--menu-opened');
      headerWrapper.classList.add('page-header__wrapper--menu-closed');
    }
  })
})();
