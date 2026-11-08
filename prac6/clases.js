class Ordenador {
  constructor(marca, modelo, precio, ram, disco, pulgadas) {
    this.marca = marca;
    this.modelo = modelo;
    if (precio <= 0) {
      this.precio = 0;
    } else {
      this.precio = precio;
    }
    if (ram <= 0) {
      this.ram = 4;
    } else {
      this.ram = ram;
    }
    if (disco <= 0) {
      this.disco = 512;
    } else {
      this.disco = disco;
    }
    if (pulgadas <= 0) {
      this.pulgadas = 17;
    } else {
      this.pulgadas = pulgadas;
    }
  }

  toString() {
    return `${this.marca} ${this.modelo} · ${this.ram} GB RAM · ${this.disco} GB · ${this.pulgadas}"`;
  }

  comparar(otro) {
    if (this.precio < otro.precio) {
      return "más barato";
    } else if (this.precio > otro.precio) {
      return "más caro";
    } else {
      return "mismo precio";
    }
  }
}

class Portatil extends Ordenador {
  constructor(
    marca,
    modelo,
    precio,
    ram = 4,
    disco = 256,
    pulgadas = 12,
    autonomia = 4,
  ) {
    super(marca, modelo, precio, ram, disco, pulgadas);

    if (autonomia <= 0) {
      this.autonomia = 4;
    } else {
      this.autonomia = autonomia;
    }
  }

  toString() {
    return super.toString() + ` · ${this.autonomia} horas de autonomía`;
  }
}

class Carrito {
  #productos;

  constructor() {
    this.#productos = [];
  }

  agregar(producto) {
    this.#productos.push(producto);
  }

  quitar(indice) {
    this.#productos.splice(indice, 1);
  }

  vaciar() {
    this.#productos = [];
  }

  getProductos() {
    return [...this.#productos];
  }

  getCantidad() {
    return this.#productos.length;
  }

  getTotal() {
    return this.#productos.reduce(
      (total, producto) => total + producto.precio,
      0,
    );
  }
}
