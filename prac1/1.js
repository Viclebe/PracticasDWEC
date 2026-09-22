var nombreVar = 5;
let nombreLet = "Nacho";
const nombreConst = 3.14;
let text1 = nombreVar + nombreLet + nombreConst;

const salida1 = document.getElementById("salida1");

salida1.textContent = text1;

nombreVar = "Chopin";
nombreLet = 234;
//nombreConst = "2";
let text2 = nombreVar + nombreLet;
var texto1 = "NO SE PUEDE REASIGNAR CONS";

salida1.textContent =
  "Originales: " + text1 + " Después de reasignar: " + text2 + " // " + texto1;
