var mensaje = "Hola";

let textoScp = "";

textoScp += "Antes del if: " + mensaje + "\n";

if (true) {
  var mensaje = "Adiós";
  textoScp += "En el if: " + mensaje + "\n";
}

textoScp += "Después del if: " + mensaje;

const salida3 = document.getElementById("salida3");

salida3.textContent +=
  textoScp +
  "\ncon let se crea una variable independiente dentro del if, con el mismo nombre 'mensaje'";
