var lista = document.getElementById("lista");

var nuevoElemento = document.createElement("li");

nuevoElemento.innerHTML =
  'Producto destacado <span class="precio">9.99</span> €.';
lista.querySelector("li").replaceWith(nuevoElemento);
