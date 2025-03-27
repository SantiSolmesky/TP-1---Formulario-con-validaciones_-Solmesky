function comprobarCantidadCaracteres() {
    var nombre = document.getElementById("nombre").value;
    var errorDiv = document.getElementById("error");
    var valido1 = true;

    if (nombre.length < 3) {
        errorDiv.textContent = "Debe tener por lo menos 3 caracteres";
        valido1 = false;
    } else {
        errorDiv.textContent = "";
    }
    
    return valido1;
}

function validarEmail() {
    var email = document.getElementById("mail").value;
    var mensaje = document.getElementById("mensaje");
    var valido2 = true;

    if (email.includes("@") && email.includes(".")) {
        mensaje.innerText = "Email válido";
    } else {
        mensaje.innerText = "Email no válido";
        valido2 = false;
    }

    return valido2;
}

function validarPassword() {
    var password = document.getElementById("password1").value;
    var errorDiv = document.getElementById("error2");
    var valido3 = true;

    if (password.length < 8) {
        errorDiv.textContent = "Debe tener al menos 8 caracteres, e incluir al menos 1 letra y 1 número.";
        valido3 = false;
    }

    var tieneLetra = password.split("").some(char => isNaN(char));
    var tieneNumero = password.split("").some(char => !isNaN(char));

    if ((!tieneLetra || !tieneNumero) && password.length >= 8) {
        errorDiv.textContent = "Debe incluir al menos 1 letra y 1 número.";
        valido3 = false;
    } else if (password.length >= 8) {
        errorDiv.textContent = "";
    }

    return valido3;
}

function comprobarPasswordIguales() {
    var password = document.getElementById("password1").value;
    var segundaPassword = document.getElementById("password2").value;
    var mensaje = document.getElementById("mensaje");
    var valido4 = true;

    if (password !== segundaPassword) {
        mensaje.innerText = "Las contraseñas tienen que ser iguales";
        valido4 = false;
    } else {
        mensaje.innerText = "";
    }

    return valido4;
}

function validarFormulario() {
    var valido1 = comprobarCantidadCaracteres();
    var valido2 = validarEmail();
    var valido3 = validarPassword();
    var valido4 = comprobarPasswordIguales();

    if (valido1 && valido2 && valido3 && valido4) {
        return true;
    } else {
        return false;
    }
}
