let productos = document.getElementById("productos");

let precios = productos.querySelectorAll("span.precio");

document.getElementById("log").textContent =
  "Total precios = " + precios.length;
