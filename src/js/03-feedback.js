var throttle = require('lodash.throttle');

// Selecting feedback form and saving it in variable
const form = document.querySelector('.feedback-form');

// Setting global variable for input data
let inputData = {
  email: form.email.value,
  message: form.message.value,
};

// Initializing listener for feedback form, executing
// throttled saving input data object in local storage
form.addEventListener(
  'input',
  throttle(savingInputValues => {
    inputData = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify('inputData'));
  }, 500),
);

// Initializing listener for feedback form submit event,
// erasing form input and local storage
form.addEventListener('submit', clearInputAndLocalStorage => {
  clearInputAndLocalStorage.preventDefault();

  console.log(inputData);

  inputData = { email: '', message: '' };
  form.email.value = '';
  form.message.value = '';
  localStorage.removeItem('feedback-form-state');
});
