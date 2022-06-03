function lansaJunin() {
var v0 = document.getElementById('v0').value;
const g = 9.81;
var h = v0 * v0/(2*g);

var t = v0 / g;

document.getElementById('vem').innerHTML = "Tempo de Subida = " + t;

document.getElementById('vem').innerHTML += " e Altura Máxima =" + h;
}