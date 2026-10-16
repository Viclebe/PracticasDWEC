/*Se desea validar hasta qué punto la función Math.random es realmente aleatoria. Para tal fin,
calcularemos 10.000 veces números aleatorios del 1 al 10. Por pantalla mostraremos cada
número del 1 al 10 y a continuación el número de veces que ha salido ese número. Por
ejemplo:
Frecuencias
Número 1: 1016
Número 2: 1019
Número 3: 1059
....
Número 10: 993*/

let contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numero;
let resultado = document.getElementById("resultado");

for (let i = 0; i < 10000; i++) {
  numero = Math.floor(Math.random() * 10) + 1;
  contadores[numero - 1]++;
}

for (let i = 0; i < contadores.length; i++) {
  resultado.innerHTML += "Número " + (i + 1) + ": " + contadores[i] + "<br>";
}
/*console.log(
  "Numero 1: " +
    contadores[0] +
    "\nNumero 2: " +
    contadores[1] +
    "\nNumero 3: " +
    contadores[2] +
    "\nNumero 4: " +
    contadores[3] +
    "\nNumero 5: " +
    contadores[4] +
    "\nNumero 6: " +
    contadores[5] +
    "\nNumero 7: " +
    contadores[6] +
    "\nNumero 8: " +
    contadores[7] +
    "\nNumero 9: " +
    contadores[8] +
    "\nNumero 10: " +
    contadores[9],
);*/
