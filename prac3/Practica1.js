let totalCombinaciones = new Array(50);
let numerosCombinacion;
let resultado = document.getElementById("resultado");

for (let j = 0; j < totalCombinaciones.length; j++) {
  numerosCombinacion = [];
  while (numerosCombinacion.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;
    if (!numerosCombinacion.includes(numero)) {
      numerosCombinacion.push(numero);
    }
  }
  totalCombinaciones[j] = numerosCombinacion;

  resultado.innerHTML +=
    "Combinación " + (j + 1) + ": " + totalCombinaciones[j].join(", ") + "<br>";
  /* console.log("Combinación " + (j + 1), totalCombinaciones[j]);*/
}
