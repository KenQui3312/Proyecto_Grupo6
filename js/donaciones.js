document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    let valid = true;
    const errorMessage = document.querySelector('form p');
    errorMessage.textContent = '';

    // Validación de campos obligatorios
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;
    const terms = document.getElementById('terms').checked;

    if (!fullName || !email || !amount || !paymentMethod || !terms) {
        valid = false;
        errorMessage.textContent = 'Por favor complete todos los campos obligatorios.';
    }

    // Si el método de pago es tarjeta de crédito, validar los detalles de la tarjeta.
    if (paymentMethod === "tarjeta") {
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const cardExpiry = document.getElementById('cardExpiry').value.trim();
        const cardCVV = document.getElementById('cardCVV').value.trim();
        if (!cardNumber || !cardExpiry || !cardCVV) {
            valid = false;
            errorMessage.textContent = 'Por favor complete todos los detalles de la tarjeta.';
        }
    }

    // Si el método de pago es transferencia bancaria, validar los detalles de la cuenta.
    if (paymentMethod === "transferencia") {
        const accountNumber = document.getElementById('accountNumber').value.trim();
        const bankName = document.getElementById('bankName').value.trim();
        if (!accountNumber || !bankName) {
            valid = false;
            errorMessage.textContent = 'Por favor complete todos los detalles de la cuenta bancaria.';
        }
    }

    if (valid) {
        alert("¡Gracias por su donación!");
        // Aquí puedes agregar la lógica para procesar la donación (por ejemplo, enviarla a un servidor).
        document.getElementById('donationForm').reset();
    }
});

// Mostrar los campos relevantes según la selección del método de pago.
document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    
    document.getElementById('creditCardFields').classList.add('hidden');
    document.getElementById('bankAccountFields').classList.add('hidden');
    
    if (paymentMethod === "tarjeta") {
        document.getElementById('creditCardFields').classList.remove('hidden');
    } else if (paymentMethod === "transferencia") {
        document.getElementById('bankAccountFields').classList.remove('hidden');
    }
});




document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de la validación
    
    let isValid = true;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const cardExpiry = document.getElementById("cardExpiry").value;
    const cardCVV = document.getElementById("cardCVV").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const bankName = document.getElementById("bankName").value;

    // Validación de correo electrónico
    if (!email || !validateEmail(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        isValid = false;
    }

    // Validación del monto
    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Por favor ingrese un monto válido mayor que 0.");
        isValid = false;
    }

    // Validación del método de pago
    if (!paymentMethod) {
        alert("Por favor seleccione un método de pago.");
        isValid = false;
    }

    // Validación de campos según el método de pago seleccionado
    if (paymentMethod === "tarjeta") {
        if (!cardNumber || isNaN(cardNumber) || cardNumber.length !== 16) {
            alert("Por favor ingrese un número de tarjeta válido de 16 dígitos.");
            isValid = false;
        }
        if (!cardExpiry || !validateExpiry(cardExpiry)) {
            alert("Por favor ingrese una fecha de expiración válida.");
            isValid = false;
        }
        if (!cardCVV || isNaN(cardCVV) || cardCVV.length !== 3) {
            alert("Por favor ingrese un código CVV válido de 3 dígitos.");
            isValid = false;
        }
    } else if (paymentMethod === "transferencia") {
        if (!accountNumber || isNaN(accountNumber) || accountNumber.length < 10) {
            alert("Por favor ingrese un número de cuenta válido.");
            isValid = false;
        }
        if (!bankName) {
            alert("Por favor ingrese el nombre del banco.");
            isValid = false;
        }
    }

    // Si todo es válido, enviar el formulario
    if (isValid) {
        alert("Formulario enviado con éxito.");
        // Aquí puedes enviar el formulario si es necesario:
        // this.submit();
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validateExpiry(expiry) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiry);
}
