const listaCatalogo = document.querySelector("#catalogo");
const listaCarrito = document.querySelector("#lista-carrito");
const tituloCarrito = document.querySelector("#titulo-carrito");
const total = document.querySelector("#total");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const filtro = document.querySelector("#filtro");
const ordenar = document.querySelector("#ordenar");
const formulario = document.querySelector("#formulario");
const tipo = document.querySelector("#tipo");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const precio = document.querySelector("#precio");
const ram = document.querySelector("#ram");
const disco = document.querySelector("#disco");
const pulgadas = document.querySelector("#pulgadas");
const autonomia = document.querySelector("#autonomia");
const error = document.querySelector("#error");

let catalogo = [
  new Ordenador("HP", "Pavilion", 599.99, 16, 512, 24),
  new Ordenador("Lenovo", "IdeaCentre", 749.99, 32, 1024, 27),
  new Ordenador("Acer", "Aspire", 450),
  new Portatil("ASUS", "VivoBook", 699.99, 16, 512, 15.6, 8),
  new Portatil("Apple", "MacBook Air", 1199.99, 16, 256, 13.6, 18),
  new Portatil("Dell", "Inspiron", 550),
];

const carrito = new Carrito();

// CATÁLOGO
function pintarCatalogo(productos) {
  listaCatalogo.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    let tipoProducto;

    if (producto instanceof Portatil) {
      tipoProducto = "Portátil";
    } else {
      tipoProducto = "Sobremesa";
    }

    const titulo = document.createElement("h3");
    titulo.textContent =
      tipoProducto + ": " + producto.marca + " " + producto.modelo;

    const detalles = document.createElement("p");
    detalles.textContent = producto.toString();

    const precioProducto = document.createElement("p");
    precioProducto.textContent = producto.precio + " €";

    const boton = document.createElement("button");
    boton.textContent = "Añadir";

    boton.addEventListener("click", () => {
      carrito.agregar(producto);
      pintarCarrito();
    });

    tarjeta.append(titulo);
    tarjeta.append(detalles);
    tarjeta.append(precioProducto);
    tarjeta.append(boton);

    listaCatalogo.append(tarjeta);
  }
}

// CARRITO
function pintarCarrito() {
  listaCarrito.innerHTML = "";

  const productos = carrito.getProductos();

  for (let i = 0; i < productos.length; i++) {
    const li = document.createElement("li");

    li.textContent = productos[i].marca + " " + productos[i].modelo;

    const boton = document.createElement("button");
    boton.textContent = "Quitar";

    boton.addEventListener("click", () => {
      carrito.quitar(i);
      pintarCarrito();
    });

    li.append(boton);
    listaCarrito.append(li);
  }

  tituloCarrito.textContent = "Carrito (" + carrito.getCantidad() + ")";
  total.textContent = "Total: " + carrito.getTotal().toFixed(2) + " €";
}

vaciarCarrito.addEventListener("click", () => {
  carrito.vaciar();
  pintarCarrito();
});

// FILTRAR
function filtrarCatalogo() {
  let productos = catalogo;

  if (filtro.value === "sobremesa") {
    productos = catalogo.filter((producto) => !(producto instanceof Portatil));
  } else if (filtro.value === "portatil") {
    productos = catalogo.filter((producto) => producto instanceof Portatil);
  }

  pintarCatalogo(productos);
}

filtro.addEventListener("change", () => {
  filtrarCatalogo();
});

//ORDENAR
ordenar.addEventListener("click", () => {
  let productos = catalogo;

  if (filtro.value === "sobremesa") {
    productos = catalogo.filter((producto) => !(producto instanceof Portatil));
  } else if (filtro.value === "portatil") {
    productos = catalogo.filter((producto) => producto instanceof Portatil);
  }

  productos.sort((a, b) => a.precio - b.precio);
  pintarCatalogo(productos);
});

// Mostrar u ocultar autonomía
tipo.addEventListener("change", () => {
  if (tipo.value === "portatil") {
    autonomia.disabled = false;
  } else {
    autonomia.disabled = true;
    autonomia.value = "";
  }
});

// Añadir productos desde el formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  error.textContent = "";

  if (
    marca.value.trim() === "" ||
    modelo.value.trim() === "" ||
    precio.value === ""
  ) {
    error.textContent = "Rellena la marca, el modelo y el precio";
  } else {
    const ramValor = ram.value === "" ? undefined : Number(ram.value);
    const discoValor = disco.value === "" ? undefined : Number(disco.value);
    const pulgadasValor =
      pulgadas.value === "" ? undefined : Number(pulgadas.value);
    const autonomiaValor =
      autonomia.value === "" ? undefined : Number(autonomia.value);

    let producto;

    if (tipo.value === "portatil") {
      producto = new Portatil(
        marca.value.trim(),
        modelo.value.trim(),
        Number(precio.value),
        ramValor,
        discoValor,
        pulgadasValor,
        autonomiaValor,
      );
    } else {
      producto = new Ordenador(
        marca.value.trim(),
        modelo.value.trim(),
        Number(precio.value),
        ramValor,
        discoValor,
        pulgadasValor,
      );
    }

    catalogo.push(producto);
    pintarCatalogo(catalogo);
    formulario.reset();
    autonomia.disabled = true;
  }
});

pintarCatalogo(catalogo);
pintarCarrito();
