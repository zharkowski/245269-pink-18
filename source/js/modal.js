(function () {
  var modalSuccess = document.querySelector('.modal--success');
  var modalError = document.querySelector('.modal--error');
  var form = document.querySelector('.form');
  var formButton = document.querySelector('.form__button');
  var closeSuccess = document.querySelector('.modal--success .modal__button');
  var closeError = document.querySelector('.modal--error .modal__button');

  formButton.addEventListener('click', function () {
    modalError.classList.add('modal--show');
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (modalError.classList.contains('modal--show')) {
      modalError.classList.remove('modal--show');
    }
    modalSuccess.classList.add('modal--show');
  });

  closeSuccess.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modalSuccess.classList.contains('modal--show')) {
      modalSuccess.classList.remove('modal--show');
    }
  });

  closeError.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modalError.classList.contains('modal--show')) {
      modalError.classList.remove('modal--show');
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalSuccess.classList.contains("modal--show")) {
        modalSuccess.classList.remove("modal--show");
      }

      if (modalError.classList.contains("modal--show")) {
        modalError.classList.remove("modal--show");
      }
    }
  });

})();
