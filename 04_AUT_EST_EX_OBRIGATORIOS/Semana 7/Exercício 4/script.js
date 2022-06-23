function viagemDia(){
    var nPessoas = document.getElementById("n1").value;
    
    if (nPessoas <= 50 ){
  
      var total = parseInt(nPessoas) * parseInt(200)
      alert ("O valor da compra é " + total);
  };
    if (nPessoas >50 ){
      var valor = parseInt(nPessoas) * parseInt(200)
      var desconto = parseInt (valor) - (parseInt(valor) * 0.4)
      alert("O valor da compra é " + desconto);
  };
  
  
    //console.log(total + " desconto" + desconto )
  };
  
  function viagemNoite (){
    var nPessoas = document.getElementById("n1").value;
    
    if (nPessoas <= 50 ){
  
      var total = parseInt(nPessoas) * parseInt(100)
      alert ("O valor da compra é " + total);
  } ;
    if (nPessoas >50 ){
      var valor = parseInt(nPessoas) * parseInt(100)
      var desconto = parseInt (valor) - (parseInt(valor) * 0.2)
      alert("O valor da compra é " + desconto);
    };
  };