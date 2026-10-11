var p1 = document.getElementById("p1");
var log = document.getElementById("log");

log.innerHTML =
  "innerHTML=" +
  p1.innerHTML +
  "<br>" +
  "textContent=" +
  p1.textContent +
  "<br>" +
  "No son iguales: innerHTML conserva las etiquetas html mientras que textContent únicamente devuevle el texto.";
