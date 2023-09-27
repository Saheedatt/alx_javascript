function handleFormSubmit (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const messageContainer = document.getElementById('messageContainer');

  messageContainer.innerHTML = '';

  if (name.trim() === '') {
    displayMessage('Please fill in the Name field.', 'red', messageContainer);
    return;
  }

  if (email.trim() === '') {
    displayMessage('Please fill in the Email field.', 'red', messageContainer);
    return;
  }

  if (!isValidEmail(email.trim())) {
    displayMessage('Please enter a valid email address.', 'red', messageContainer);
    return;
  }

  displayMessage('Form submitted successfully!', 'green', messageContainer);
}

function displayMessage (message, color, container) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.style.color = color;
  container.appendChild(messageElement);
}

function isValidEmail (email) {
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');

  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
