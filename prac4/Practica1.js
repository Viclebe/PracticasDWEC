/*Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.
A continuación, se eliminarán todas las palabras repetidas y además se ordenarán en
español, pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla.*/

const palabras = [];
let palabra = prompt("Introduce una palabra: ");
let resultado = document.getElementById("resultado");

while (palabra != null && palabra.trim() !== "") {
  palabras.push(palabra);
  palabra = prompt("Introduce otra palabra: ");
}

const palabraRepetida = palabras.filter(
  (palabra, totalPalabras) => palabras.indexOf(palabra) !== totalPalabras,
);

const palabrasUnicas = palabras.filter(
  (palabra, lista) => palabras.indexOf(palabra) === lista,
);

palabrasUnicas.sort((a, b) => b.localeCompare(a, "es"));

/*console.log(palabras);
console.log(palabraRepetida);
console.log(palabrasUnicas);*/

resultado.innerHTML = palabrasUnicas.join(" - ");
