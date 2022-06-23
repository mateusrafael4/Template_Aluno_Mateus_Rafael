function Listar() {
    var texto = document.getElementById("lista").value;
    console.log(texto)
    var ValorFoco = document.getElementById("valor-foco").value;
    console.log(ValorFoco)
    var posicao = 0
    var lista = texto.split(",");

    lista.unshift(ValorFoco);
    var foco = lista[posicao];
    
   
    lista.sort((a,b) => a-b);
    console.log(lista)
    var resultado = lista.indexOf(String(foco)) + 1;
    console.log(resultado)

    document.getElementById("Resposta").innerHTML = "Sendo o valor foco " + resultado + "º valor da lista"
}