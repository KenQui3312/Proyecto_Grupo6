document.getElementById('voluntariado-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const voluntariado = document.getElementById('voluntariado').value;
    const comentarios = document.getElementById('comentarios').value.trim();

    // Inicializar mensajes de error
    let errores = [];
    
    // Validación de campos
    if (nombre === '') {
        errores.push('El campo "Nombre Completo" es obligatorio.');
    }

    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.push('Por favor, introduce un correo electrónico válido.');
    }

    if (telefono === '' || !/^\d{8,15}$/.test(telefono)) {
        errores.push('Por favor, introduce un número de teléfono válido (8 a 15 dígitos).');
    }

    if (!voluntariado) {
        errores.push('Por favor, selecciona un tipo de voluntariado.');
    }

    // Mostrar mensajes de error o éxito
    const formResponse = document.getElementById('form-response');
    formResponse.innerHTML = ''; // Limpiar mensajes anteriores
    
    if (errores.length > 0) {
        formResponse.style.color = 'red';
        errores.forEach(error => {
            const errorP = document.createElement('p');
            errorP.textContent = error;
            formResponse.appendChild(errorP);
        });
    } else {
        formResponse.style.color = 'green';
        formResponse.textContent = '¡Formulario enviado con éxito!';
        
    
    }
});


