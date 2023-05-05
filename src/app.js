// document.getElementById("enviar").addEventListener("click", () => {
//   // Obtener los valores del formulario de inicio de sesión
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const remember = document.getElementById("remember").checked;

//   // Realizar la validación del formulario
//   if (email === "" || password === "") {
//     alert("Por favor, ingrese su correo electrónico y contraseña.");
//     return false;
//   }

//   // Realizar comprobaciones adicionales
//   if (email.indexOf("@") === -1) {
//     alert("Por favor, ingrese una dirección de correo electrónico válida.");
//     return false;
//   }

//   if (password.length < 8) {
//     alert("La contraseña debe tener al menos 8 caracteres.");
//     return false;
//   }

//   // Si se ha marcado la opción de recordar, guardar el correo electrónico en localStorage
//   if (remember) {
//     localStorage.setItem("email", email);
//   }

//   // Si todo está bien, enviar el formulario
//   return true;
// })
