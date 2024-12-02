
document.addEventListener('DOMContentLoaded', onPageLoaded);


function onPageLoaded(){

    const mySlider = new SliderController();
}

/* HAMBURGUESA */
function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  menu.classList.toggle('show'); // Añadir o quitar la clase 'show' para mostrar/ocultar el menú
}



const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();

  clearErrors();

  let isValid = true;

  if (!name) {
    showError('name', 'Nombre es necesario.');
    isValid = false;
  }

  if (!email) {
    showError('email', 'Email es necesario.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Por favor, introduce una dirección de correo electrónico válida.');
    isValid = false;
  }

  if (!company) {
    showError('company', 'Compañia/Organizacion es necesario.');
    isValid = false;
  }

  if (!message) {
    showError('message', 'Mensaje es necesario.');
    isValid = false;
  } else if (message.length < 10) {
    showError('message', 'El mensaje debe tener al menos 10 caracteres.');
    isValid = false;
  }

  if (isValid) {
    alert('Formulario enviado exitosamente!'); 
    form.submit();
  }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '0.9em';
    error.innerText = message;
    field.parentElement.appendChild(error);
  }

function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => error.remove());
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  










  





