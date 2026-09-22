let textoTID = "";
let limite10 = 30;

const salida10 = document.getElementById("salida10");

for (let i = 1; i <= limite10; i++) {
  for (let j = 1; j <= limite10; j++) {
    if (j < i) {
      textoTID += " * ";
    } else {
      textoTID += " ";
    }
  }
  textoTID += "\n";
}
salida10.textContent = textoTID;
