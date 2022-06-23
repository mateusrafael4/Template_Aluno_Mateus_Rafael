function Notas() {
    var qtdAlunos = Number(document.getElementById("qtAlunos").value)
    var notasProva = (document.getElementById("notaDaProva").value.split(","))
    var notasTrabalho = (document.getElementById("notaDoTrabalho").value).split(",")

    class Aluno {
        constructor(
            nome,
            notaProva,
            notaTrabalho,
            media,
        ) {
            this.nome = nome;
            this.notaProva = notaProva;
            this.notaTrabalho = notaTrabalho;
            this.media = media;
        }
    };

    var listaAlunos = []

    console.log(qtAlunos)
    console.log(notaDaProva)
    console.log(notaDoTrabalho)

    for (var i = 0; i <= qtdAlunos - 1; i++) {
        var aluno = new Aluno(
            `aluno${i}`,
            Number(notaDaProva[i]),
            Number(notaDoTrabalho[i]),
            ((Number(notaDaProva[i]) * 2) + (Number(notaDoTrabalho[i]) * 3)) / 2
        );

        console.log(aluno)
        // aluno.nome = `aluno${i}`
        // aluno.notaProva = notasProva[i]
        // aluno.notaTrabalho = notasTrabalho[i]

        listaAlunos.push(aluno)
    };
    console.log(listaAlunos)

    var valorProva = 0
    var valorTrabalho = 0

    for (var j = 0; j < notasProva.length; j++) {
        valorProva += Number(notasProva[j])
    };

    for (var k = 0; k < notasTrabalho.length; k++) {
        valorTrabalho += Number(notasTrabalho[k])
    };

    console.log(valorProva)

    var mediaProva = valorProva / qtdAlunos
    var mediaTrabalho = valorTrabalho / qtdAlunos
    var mediaGeral = (mediaProva + mediaTrabalho) / 2
    console.log(mediaProva)
    console.log(mediaTrabalho)

    document.getElementById('mediaGeral').innerHTML = mediaGeral
    document.getElementById('mediaDosTrabalhos').innerHTML = mediaProva
    document.getElementById('mediaDasProvas').innerHTML = mediaTrabalho

    var maiorTrabalho = Math.max(...notasTrabalho)
    document.getElementById('maiorDoTrabalho').innerHTML = maiorTrabalho
    console.log(maiorTrabalho)

    var menorTrabalho = Math.min(...notasTrabalho)
    document.getElementById('menorDoTrabalho').innerHTML = menorTrabalho
    console.log(menorTrabalho)

    var maiorProva = Math.max(...notasProva)
    document.getElementById('maiorDaProva').innerHTML = maiorProva
    console.log(maiorProva)

    var menorProva = Math.min(...notasProva)
    document.getElementById('menorDaProva').innerHTML = menorProva
    console.log(menorProva)

}