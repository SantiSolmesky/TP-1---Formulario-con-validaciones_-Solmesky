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
