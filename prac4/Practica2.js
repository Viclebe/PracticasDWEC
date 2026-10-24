/*Crear una función que recibirá todas las palabras y devolverá un mapa que contenga como
clave cada palabra y cuyo valor será el número de veces que aparece esa palabra en el
array. Mostrar los resultados por pantalla.
*/

const palabras = [];
let palabra = prompt("Introduce una palabra: ");
let resultado = document.getElementById("resultado");

while (palabra != null && palabra.trim() !== "") {
  palabras.push(palabra);
  palabra = prompt("Introduce otra palabra: ");
}

function contarPalabras(palabras) {
  const mapaPalabras = new Map();

  palabras.forEach((palabra) => {
    if (mapaPalabras.has(palabra)) {
      mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
    } else {
      mapaPalabras.set(palabra, 1);
    }
  });

  return mapaPalabras;
}

const resultadoPalabras = contarPalabras(palabras);

resultado.innerHTML = "";

/*console.log(palabras);
console.log(palabraRepetida);
console.log(palabrasUnicas);*/

resultadoPalabras.forEach((cantidad, palabra) => {
  resultado.innerHTML += palabra + ": " + cantidad + "<br>";
});
