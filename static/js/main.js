(function () {

  var thanksInQuery = window.location.search === '?thanks';

  var thanks = document.querySelector('#signup #thanks');
  var form = document.querySelector('#signup form');
  var formCheckbox = form.querySelector('input[name="optin"]');
  var formEmail = form.querySelector('input[name="email"]');

  form.onsubmit = function (e) {
    if (!formCheckbox.checked) {

      // optin checkbox not checked

      e.preventDefault();
      return false;
    }

    if (!formEmail.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i)) {

      // bad email address

      e.preventDefault();
      return false;
    }
  };

  if (thanksInQuery) {
    form.classList.add('hide');
    thanks.classList.add('show');
  }
})();
