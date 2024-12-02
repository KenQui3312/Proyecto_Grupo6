const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío por defecto del formulario

  const comment = document.getElementById('comment').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validaciones
  let isValid = true;
  let errorMessage = '';

  // Validar campo de comentario
  if (!comment) {
    isValid = false;
    errorMessage += 'El campo de comentario no puede estar vacío.\n';
  }

  // Validar nombre
  if (!name) {
    isValid = false;
    errorMessage += 'El campo de nombre no puede estar vacío.\n';
  }

  // Validar correo electrónico (formato básico)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    isValid = false;
    errorMessage += 'El campo de correo electrónico no puede estar vacío.\n';
  } else if (!emailRegex.test(email)) {
    isValid = false;
    errorMessage += 'El correo electrónico no tiene un formato válido.\n';
  }

  // Mostrar errores o confirmar el envío
  if (isValid) {
    alert('¡Comentario publicado exitosamente!');
    commentForm.reset();
  } else {
    alert(errorMessage);
  }
});
