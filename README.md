"# TP-1---Formulario-con-validaciones_-Solmesky" </br>
# README

## Descripción del Proyecto

Este proyecto consiste en la implementación de un formulario con varias validaciones utilizando HTML y JavaScript. La interfaz permite a un usuario ingresar su nombre, correo electrónico, contraseña y confirmar la contraseña. A continuación se describen los detalles de cómo se diseñó la interfaz, las validaciones implementadas, los desafíos enfrentados y las mejoras que se agregarían si tuviéramos más tiempo.

---

## Diseño de la Interfaz del Formulario

La interfaz del formulario fue diseñada para ser simple y clara, con un enfoque en la usabilidad. Los elementos del formulario son los siguientes:

1. **Campo de Nombre Completo**: Un campo de texto donde el usuario debe ingresar su nombre completo. Se requiere que el nombre tenga al menos 3 caracteres.
2. **Campo de Correo Electrónico**: Un campo donde el usuario debe ingresar su correo electrónico. El correo debe tener un formato válido (contener un "@" y un ".").
3. **Campo de Contraseña**: Un campo de contraseña donde el usuario debe ingresar una contraseña que cumpla con ciertos requisitos de seguridad.
4. **Confirmación de Contraseña**: Un campo donde el usuario debe repetir la contraseña para asegurarse de que ambas contraseñas coincidan.
5. **Botón de Envío**: Un botón que permite enviar el formulario después de haber validado correctamente los campos.

La estructura del formulario está compuesta por etiquetas `<label>` para describir cada campo y `<input>` para permitir la entrada de datos. También se incluyen elementos `<div>` para mostrar los mensajes de error si alguna validación no se cumple.

---

## Validaciones Implementadas

Las siguientes validaciones fueron implementadas para asegurarnos de que los datos ingresados en el formulario sean correctos:

### 1. **Nombre Completo**
   - **Requisito**: El campo es obligatorio y debe tener al menos 3 caracteres.
   - **Validación**: Si el nombre tiene menos de 3 caracteres, se muestra un mensaje de error indicando que debe tener al menos 3 caracteres.

### 2. **Correo Electrónico**
   - **Requisito**: El correo debe tener un formato válido (contener un "@" y un ".").
   - **Validación**: Se utiliza el método `includes()` para verificar que el correo contenga ambos caracteres. Si no es válido, se muestra un mensaje de error indicando que el correo no es válido.

### 3. **Contraseña**
   - **Requisito**: La contraseña debe tener al menos 8 caracteres, e incluir al menos una letra y un número.
   - **Validación**: Se verifica si la contraseña tiene al menos 8 caracteres. Además, se comprueba que contenga al menos una letra y al menos un número. Si la contraseña no cumple con estos requisitos, se muestra un mensaje de error.

### 4. **Confirmación de Contraseña**
   - **Requisito**: La confirmación de la contraseña debe coincidir con la contraseña original.
   - **Validación**: Si las contraseñas no coinciden, se muestra un mensaje de error indicando que las contraseñas deben ser iguales.

### 5. **Botón de Envío**
   - **Requisito**: El formulario debe enviarse solo si todos los campos son válidos.
   - **Implementación**: Se utiliza un botón con el atributo `onclick` que llama a la función de validación. Si todas las validaciones son correctas, el formulario se puede enviar. Si alguna validación falla, el formulario no se envía y se muestran los mensajes de error.

---

## Desafíos Enfrentados y Cómo los Resolvímos

### 1. **Validación del Correo Electrónico**
   - **Desafío**: Inicialmente se trató de validar el correo utilizando un enfoque incorrecto, como el uso de `contains()`, que no era adecuado para verificar si el correo contenía los caracteres necesarios.
   - **Solución**: Se corrigió usando el método adecuado `email.includes("@") && email.includes(".")`, lo que permitió validar correctamente el correo electrónico.

### 2. **Confirmación de Contraseña**
   - **Desafío**: Al principio no se verificaba correctamente si las contraseñas coinciden. Esto podía permitir que se enviara el formulario con contraseñas no coincidentes.
   - **Solución**: Se implementó una función adicional `comprobarPasswordIguales()` que verifica si las contraseñas son iguales antes de permitir el envío del formulario.

### 3. **Manejo de Errores**
   - **Desafío**: A veces los errores no se mostraban correctamente debido a la lógica de validación incompleta.
   - **Solución**: Aseguramos que cada campo tuviera un mensaje de error adecuado que se mostrara solo cuando fuera necesario. También revisamos que las variables de validación fueran claras y precisas para controlar el flujo de errores.

---

## Mejoras a Futuro

Si tuviéramos más tiempo, consideramos que las siguientes mejoras harían el código más versátil y funcional:

### 1. **Mejorar la Validación del Correo Electrónico**
   - **Propuesta**: Utilizar una expresión regular (regex) para validar el formato del correo electrónico de una forma más robusta y completa, cubriendo una mayor variedad de formatos válidos.

### 2. **Añadir Más Reglas de Seguridad para la Contraseña**
   - **Propuesta**: Además de verificar la longitud y la presencia de letras y números, se podría agregar validación para otros requisitos de seguridad, como la presencia de caracteres especiales y la no inclusión de palabras comunes o fáciles de adivinar.

### 3. **Mostrar Mensajes de Éxito**
   - **Propuesta**: Agregar un mensaje de éxito al enviar el formulario correctamente, indicando al usuario que sus datos fueron recibidos con éxito.



