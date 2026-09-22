let nota = 9;
let textoNota = "";

if (nota < 5) {
  textoNota = "Suspenso";
}
if (nota >= 5 && nota <= 6) {
  textoNota = "Aprobado";
}
if (nota >= 7 && nota <= 8) {
  textoNota = "Notable";
}
if (nota >= 9) {
  textoNota = "Sobresaliente, felicidades";
}

const salida4 = document.getElementById("salida4");

salida4.textContent = textoNota;
