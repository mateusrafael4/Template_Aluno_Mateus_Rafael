function Somar(){
    var entrada = Number(document.getElementById("quantidade").value);
    var entrada = entrada + 1

    document.getElementById("quantidade").value = String(entrada)
}

function Subtrair(){
    var entrada = Number(document.getElementById("quantidade").value);
    var entrada = entrada - 1

    document.getElementById("quantidade").value = String(entrada)
}