function validatePassword () {
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error');

  let errorMessage = '';

  if (password.length < 8) {
    errorMessage += 'Password must be at least 8 characters long. ';
  }

  let hasUppercase = false;
  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
      break;
    }
  }
  if (!hasUppercase) {
    errorMessage += 'Password must contain at least one uppercase letter. ';
  }
  let hasLowercase = false;
  for (const char of password) {
    if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
      break;
    }
  }
  if (!hasLowercase) {
    errorMessage += 'Password must contain at least one lowercase letter. ';
  }

  let hasNumber = false;
  for (const char of password) {
    if (char >= '0' && char <= '9') {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    errorMessage += 'Password must contain at least one numeric digit. ';
  }

  const specialCharacters = '!@#$%^&*';
  let hasSpecialChar = false;
  for (const char of password) {
    if (specialCharacters.includes(char)) {
      hasSpecialChar = true;
      break;
    }
  }
  if (!hasSpecialChar) {
    errorMessage += 'Password must contain at least one special character (e.g., !@#$%^&*). ';
  }

  errorElement.textContent = errorMessage;

  return errorMessage === '';
}
