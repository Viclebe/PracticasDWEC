let listaCompra = ["Leche", "Pan", "Huevos"];

const lista = document.querySelector("#lista");
const anyadir = document.querySelector("#btn-agregar");
const eliminarUltimo = document.querySelector("#btn-eliminar");
const contador = document.querySelector("#contador");
const buscador = document.querySelector("#buscador");
const input = document.querySelector("#input-producto");
const ordenar = document.querySelector("#btn-ordenar");

function mostrarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < listaCompra.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaCompra[i];
    lista.append(li);
  }
  if (listaCompra.length == 0) {
    contador.textContent = "La lista está vacía";
  } else {
    contador.textContent =
      "Tienes " + listaCompra.length + " productos en la lista";
  }
}
mostrarLista();

anyadir.addEventListener("click", () => {
  const producto = input.value.trim();

  if (producto !== "") {
    if (listaCompra.includes(producto)) {
      alert("Este producto ya existe en la lista");
    } else {
      listaCompra.push(producto);
      input.value = "";
      mostrarLista();
    }
  }
});

eliminarUltimo.addEventListener("click", () => {
  listaCompra.pop();
  mostrarLista();
});

buscador.addEventListener("input", () => {
  const palabra = buscador.value.toLocaleLowerCase();
  lista.innerHTML = "";
  for (let i = 0; i < listaCompra.length; i++) {
    if (listaCompra[i].toLocaleLowerCase().includes(palabra)) {
      const li = document.createElement("li");
      li.textContent = listaCompra[i];
      lista.append(li);
    }
  }
});

lista.addEventListener("click", (event) => {
  const elemento = event.target;
  const producto = elemento.textContent;
  const posicion = listaCompra.indexOf(producto);

  if (posicion !== -1) {
    listaCompra.splice(posicion, 1);
    mostrarLista();
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    anyadir.click();
  }
});

ordenar.addEventListener("click", () => {
  listaCompra.sort();
  mostrarLista();
});
