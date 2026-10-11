let productos = document.getElementById("productos");

let precios = productos.querySelectorAll("span.precio");

for (var i = 0; i < precios.length; i++) {
  let precio = Number(precios[i].textContent);
  precios[i].textContent = (precio + 0.1).toFixed(2);
}
