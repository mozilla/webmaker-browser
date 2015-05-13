(function () {
  var thanksInQuery = window.location.search === '?thanks';
  var errorsInQuery = window.location.search.match(/([a-zA-Z]+Error)+/g);
  var thanks = document.querySelector('#signup #thanks');
  var form = document.querySelector('#signup form');
  var formCheckbox = form.querySelector('input[name="optin"]');
  var formEmail = form.querySelector('input[name="email"]');

  var validationTests = {
    optin: function () {
      return !formCheckbox.checked;
    },
    email: function () {
      return !formEmail.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
    }
  };

  function validationFilter (validationKey) {
    return validationTests[validationKey]();
  }

  form.onsubmit = function (e) {
    var tests = Object.keys(validationTests).filter(validationFilter);

    if (tests.length > 0) {
      form.setAttribute('data-errors', tests.join(','));
      e.preventDefault();
      return false;
    }
  };

  if (thanksInQuery) {
    form.removeAttribute('data-errors');
    form.classList.add('hide');
    thanks.classList.add('show');
  }

  if (errorsInQuery) {
    form.setAttribute('data-errors', errorsInQuery.filter(function (error) {
      var errorType = error.match(/([a-zA-Z]+)Error/);
      if (errorType) {
        return errorType[1];
      }
    }).join(','));
  }
})();
