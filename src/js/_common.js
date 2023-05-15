// function volverArriba() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }

document.getElementById("saltar-contenido").addEventListener("click", () => {
  var contenidoPrincipal = document.getElementById('header');
  contenidoPrincipal.tabIndex = -1;
  contenidoPrincipal.focus();
})






{/* <button id="volver-arriba" onclick="volverArriba()">Volver arriba</button> */}
