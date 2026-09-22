let textoFB = "";

const salida6 = document.getElementById("salida6");

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    textoFB += i + " Fizz\n";
  }
  if (i % 5 == 0) {
    textoFB += i + " Buzz\n";
  }
  if (i % 3 == 0 && i % 5 == 0) {
    textoFB += i + " FizzBuzz\n";
  }
}
salida6.textContent = textoFB;
