let textoTIC = "";
let limite9 = 30;

const salida9 = document.getElementById("salida9");

for (let i = 1; i <= limite9; i++) {
  for (let j = 1; j <= limite9; j++) {
    if (j <= limite - i) {
      textoTIC += " * ";
    } else {
      textoTIC += " ";
    }
  }
  textoTIC += "\n";
}
salida9.textContent = textoTIC;
