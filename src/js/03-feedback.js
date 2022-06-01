// Initializing throttle library
var throttle = require('lodash.throttle');

// Selecting feedback form and saving it in variable
const form = document.querySelector('.feedback-form');

// Setting global variable for input data
let inputData = {
  email: form.email.value,
  message: form.message.value,
};

// Loading input data from past session if present in local storage
if (localStorage.getItem('feedback-form-state') !== null) {
  inputData = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.email.value = inputData.email;
  form.message.value = inputData.message;
}

// Initializing listener for feedback form, executing
// throttled input data object saving in local storage
form.addEventListener(
  'input',
  throttle(savingInputValues => {
    inputData = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
  }, 500),
);

// Initializing listener for feedback form submit event,
// erasing form input and local storage,
// Outputting log containing form input as object
form.addEventListener('submit', clearInputAndLocalStorage => {
  clearInputAndLocalStorage.preventDefault();
  console.log(inputData);

  inputData = { email: '', message: '' };
  form.email.value = '';
  form.message.value = '';
  localStorage.removeItem('feedback-form-state');
});
