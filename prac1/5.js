let sumaTotal = 0;

const salida5 = document.getElementById("salida5");
for (let i = 1; i <= 50; i++) {
  if (i % 4 == 0) {
    sumaTotal += i;
  }
}
salida5.textContent = sumaTotal;
