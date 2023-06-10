export function validateInputFields(inputFields) {
    let isValid = false;
  
    for (let i = 0; i < inputFields.length; i++) {
      let input = inputFields[i];
      let inputErrorMsg = input.nextElementSibling;
  
      if (!input.value.trim()) {
        inputErrorMsg.textContent = 'Este campo es requerido.';
        inputErrorMsg.style.display = 'block';
      } else if (input.name === 'password' && (input.value.length < 4 || input.value.length > 8)) {
        inputErrorMsg.textContent = 'La contraseña debe tener entre 4 y 8 caracteres.';
        inputErrorMsg.style.display = 'block';
      } else if (input.name === 'email' && !input.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        inputErrorMsg.textContent = 'Introduzca un correo electrónico válido.';
        inputErrorMsg.style.display = 'block';
      } else {
        inputErrorMsg.textContent = '';
        inputErrorMsg.style.display = 'none';
        isValid = true;
      }
    }
  
    return isValid;
  }