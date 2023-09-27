function generateInputFields (numFields) {
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';

  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = 'field' + i;
    inputField.placeholder = 'Field ' + i;
    inputContainer.appendChild(inputField);
  }
}
function validateForm (event) {
  const numFields = document.getElementById('numFields').value;
  const inputContainer = document.getElementById('inputContainer');
  const inputFields = inputContainer.getElementsByTagName('input');

  const errorElement = document.createElement('p');
  errorElement.id = 'error';
  errorElement.style.color = 'red';

  let errorMessage = '';

  for (let i = 0; i < numFields; i++) {
    if (inputFields[i].value.trim() === '') {
      errorMessage = 'Please fill in all fields.';
      break;
    }
  }
  errorElement.textContent = errorMessage;

  inputContainer.appendChild(errorElement);

  if (errorMessage !== '') {
    event.preventDefault();
  }
}

document.getElementById('numFields').addEventListener('change', function () {
  const numFields = this.value;
  generateInputFields(numFields);
});

document.getElementById('dynamicForm').addEventListener('submit', validateForm);
