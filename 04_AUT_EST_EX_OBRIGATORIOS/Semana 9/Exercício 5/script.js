


function Verificar() {
    var numero1 = document.getElementById('inicioIntervalo').value;
    var numero2 = document.getElementById('fimIntervalo').value;
    
    console.log(numero1 + "  " + numero2)

    let inicioIntervalo = numero1;
    let fimIntervalo = numero2;
    let valoresPrimos = [];

    for (let a = inicioIntervalo; a < fimIntervalo; a++) {
        let flag = 0;

        for (let b = 2; b < a; b++) {
            if (a % b == 0) {
                flag = 1;
            }
        };
    
        if (a > 1 && flag == 0) {
            valoresPrimos += a; + ",";
        }
    };
    console.log(valoresPrimos)

    document.getElementById('Resultado').innerHTML = "Os valores primos" + inicioIntervalo + "até" + fimIntervalo + "são: " + valoresPrimos;
}