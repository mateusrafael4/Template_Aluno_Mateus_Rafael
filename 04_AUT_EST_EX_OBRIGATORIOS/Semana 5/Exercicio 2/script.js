function calculate() {
    let notade1
    let notade2
    let notade5
    let notade10
    let notade20
    let notade50
    let notade100
    let total
    let resta

    total = document.getElementById("valorEntrada").value;
    notade100 = Math.floor (total/100);
    resta = total % 100;
    notade50 = Math.floor(resta/50);
    resta = total % 50;
    notade20 = Math.floor(resta/20);
    resta = total % 20;
    notade10 = Math.floor(resta/10);
    resta = total % 10;
    notade5 = Math.floor(resta/5);
    resta = total % 5;
    notade2 = Math.floor(resta/2);
    resta = total % 2;
    notade1 = Math.floor(resta/1);
    resta = total % 1
    document.getElementById("text").innerHTML = notade100 + " notas de 100, " + notade50 + " notas de 50, " + notade20 + " notas de 20, " + notade10 + " notas de 10, " + notade5 + " notas de 5, " + notade2 + " notas de 2, e " + notade1 + " notas de 1"
}