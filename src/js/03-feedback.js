import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackFormStateKey = 'feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(feedbackFormStateKey));

const { email, message } = form.elements;

const saveFormState = throttle(event => {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function submitOn(event) {
  event.preventDefault();
  localStorage.clear();
  if (email.value === '' || message.value === '') {
    return console.log('Fill all fields!');
  }

  console.log(formValues);
  
  event.currentTarget.reset();
}

form.addEventListener('input', saveFormState);
form.addEventListener('submit', submitOn);