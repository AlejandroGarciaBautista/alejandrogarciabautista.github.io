// init Isotope
var $grid = $('#todos-productos').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// Carrito

// obtener el JSON
const objeto = JSON.parse(
  `
  {
    "cesta": 
    [
      {
        "id": 1,
        "producto": "Pantalón corto de hombre",
        "precio": 50,
        "imagen": "../img/Pantalón corto azul.jpg"
      }, 
      {
        "id": 2,
        "producto": "Camiseta de mujer",
        "precio": 100,
        "imagen": "../img/camisa mujer azul.jpg"
      },
      {
        "id": 3,
        "producto": "Calzado deportivo",
        "precio": 70,
        "imagen": "../img/nike.jpg"
      }
    ]
  }
  `
)

// obtener el contenedor donde se mostrarán los productos
const contenedor = document.querySelector('#items');

// recorrer los productos y construir las etiquetas
objeto.cesta.forEach(producto => {
  
  // crear contenedor
  const nuevoDiv = document.createElement("div")
  nuevoDiv.className = "btn d-flex gap-2 justify-content-center border mt-3 shadow-sm w-25 m-1"

  // crear la etiqueta img
  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.producto;
  imagen.className = "img-carrito"
  
  // crear la etiqueta h3
  const texto = document.createElement('p');
  texto.textContent = producto.producto + ": " + producto.precio + "€";
  

  nuevoDiv.appendChild(texto)
  nuevoDiv.appendChild(imagen)
  
  // // agregar las etiquetas al contenedor
  // contenedor.appendChild(titulo);
  // contenedor.appendChild(imagen);

  contenedor.appendChild(nuevoDiv)
});

const total = document.querySelector('#pagar');
let suma = 0;

objeto.cesta.forEach(producto => {
  suma += producto.precio
})

total.textContent = total.textContent + suma.toString() + "€"