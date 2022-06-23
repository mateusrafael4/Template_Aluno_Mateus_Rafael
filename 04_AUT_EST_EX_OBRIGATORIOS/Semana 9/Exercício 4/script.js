function sequenciar() {
    var limite = Number(document.getElementById("ate1").value)
    var resultado = document.getElementById("resultado")
    var sequencia = [1,1]

    if(limite > 0) {
        if(limite === 1){
            res.innerHTML += "1"
        } 
        
        else {
            for(var a = 1; a < limite; a++){
                sequencia.push(sequencia[a]+sequencia[a-1])
            };

            for(var b = 0; b <sequencia.length; b++){
                if(b === sequencia.length-1){
                    resultado.innerHTML += `${sequencia[b]}`
                } 
                
                else {
                    resultado.innerHTML += `${sequencia[b]}, `
                }
            }
        }

    } else {
        alert("Insira um limite maior que 0")
    }
}