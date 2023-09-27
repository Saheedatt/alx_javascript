function handleFormSubmission (event) {
  event.preventDefault();

  if (validateEmail()) {
    console.log('Email is valid. Submitting the form.');
  }
}

function validateEmail () {
  const email = document.getElementById('email').value;
  const errorElement = document.getElementById('error');

  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');

  if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
    errorElement.textContent = '';
    return true;
  } else {
    errorElement.textContent = 'Please enter a valid email address.';
    return false;
  }
}
