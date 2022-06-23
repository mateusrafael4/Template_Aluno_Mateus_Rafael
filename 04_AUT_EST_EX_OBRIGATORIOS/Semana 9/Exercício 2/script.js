function calcular(){
    var num = document.getElementById("numero").value;
    console.log(num)
    var array = num.split("")
    console.log(array)
    var soma = 0
    for(var j = 0; j < array.length; j++){
        soma += Number(array[j])
        console.log(soma)
    }
    document.getElementById("resultado").innerHTML = "Total: " + soma;
}