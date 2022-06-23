function organizar(){
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    var nome3 = document.getElementById("nome3").value
  
    const Nomes = [nome1, nome2, nome3]
    let nomesOrdenados = Nomes.sort();
    console.log(Nomes.sort())
  
    nomes.innerHTML += `Em ordem alfabética, fica:  ${nomesOrdenados}`
  
  };