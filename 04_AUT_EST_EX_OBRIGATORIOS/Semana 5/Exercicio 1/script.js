function calculo(){
let valor1 = parseInt(document.getElementById('valor1').value);
let valor2 = parseInt(document.getElementById('valor2').value);
let opcao = document.getElementById('operacao').value;

if (opcao == "+") {
    resultado = valor1 + valor2;
    alert(resultado);
}
else if (opcao == "-") {
    resultado = valor1 - valor2;
    alert(resultado);
}
else if (opcao == "*") {
    resultado = valor1 * valor2;
    alert(resultado);
}
else if (opcao == "/") {
    resultado = valor1 / valor2;
    alert(resultado);
}
else if (opcao == "%") {
    resultado = valor1 % valor2;
    alert(resultado);
}
}