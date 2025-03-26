function comprobarCantidadCaracteres()
{
    var nombre = document.getElementById("nombre");
    var errorDiv = document.getElementById("error");


    if(nombre.value.length < 3)
    {
        errorDiv.textContent = "Debe tener por lo menos 3 caracteres";
    }
    else{
        errorDiv.textContent = "";
    }
}


function validarEmail() {
    var email = document.getElementById("mail").value;
    var esValido = email.contains("@") && email.contains(".");
    var mensaje = document.getElementById("mensaje");
    if (esValido) {
        mensaje.innerText = "Email valido";
    } else {
        mensaje.innerText = "Email no valido";
       
    }
}


function validarPassword()
{
    var password = document.getElementById("password1");
    var errorDiv = document.getElementById("error");


    if((password.value.length < 8) && (password.contains ("") && password.contains()))
    {
        errorDiv.textContent = "Debe tener por lo menos 8 caracteres, y tiene que incluir 1 letra y 1 numero";
    }
    else{
        errorDiv.textContent = "";
    }
}


function comprobarPasswordIguales()
{
    var password = document.getElementById("password1");
    var segundaPassword = document.getElementById("password2");
    var mensaje = document.getElementById("mensaje")
    if(password != segundaPassword)
    {
        mensaje.innerText = "Las contraseñas tiene que ser iguales";
       
    }
    else{
        mensaje.innerText = "";
    }
   
}
