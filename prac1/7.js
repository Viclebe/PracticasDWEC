let textoD = "";

const salida7 = document.getElementById("salida7");

for (let i = 1; i <= 20; i++) {
  for (let j = 1; j <= 20; j++) {
    if (j === i) {
      textoD += "*";
    } else {
      textoD += "  ";
    }
  }
  textoD += "\n";
}
salida7.textContent = textoD;
