const formFeedback = document.getElementById('form-feedback');

export function signUp(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  fetch('/src/registerUser.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.text();
  })
  .then(data => {
    if (data) {
      formFeedback.style.display = "block";
      formFeedback.textContent = data;
      formFeedback.classList.replace('error-message', 'form-feedback'); 

      showTableButton();
    }
  })
  .catch((error) => {
    if (error.message == '409') {
      formFeedback.style.display = "block";
      formFeedback.classList.replace('form-feedback', 'error-message'); 
      formFeedback.textContent = 'El correo electrónico ya está registrado.';
    } else {
      console.error('Error:', error);
    }
  });
}


function showTableButton() {
  const consultaButton = document.getElementById('consulta-btn');
  consultaButton.style.display = "inline-block";
}