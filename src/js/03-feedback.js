import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveState = throttle(() => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value,
    })
  );
}, 500);

form.addEventListener('input', saveState);

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
});

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedState) {
  emailInput.value = savedState.email;
  messageInput.value = savedState.message;
}
