let textoD2 = "";
let limite = 20;

const salida8 = document.getElementById("salida8");

for (let i = 1; i <= limite; i++) {
  for (let j = 1; j <= limite; j++) {
    if (j === limite - i) {
      textoD2 += "*";
    } else {
      textoD2 += "  ";
    }
  }
  textoD2 += "\n";
}
salida8.textContent = textoD2;
