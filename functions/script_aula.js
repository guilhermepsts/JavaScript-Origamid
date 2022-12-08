//Area
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado(89);

//truthy
function verificarTruthy(valor) {
  return (!!valor);
}
console.log(verificarTruthy(" a"));


//imc
function imc(peso, altura) {
  var imc = peso / (altura ** 2);
  return imc;
}
console.log(imc (56, 1.72));


addEventListener('click', function() {
  console.log("clicou");
})

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade());

function faltaVisitar(paisesVisitados){
   var totalPaises = 193;
   return`Falta visitar ${totalPaises - paisesVisitados} países.`;
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados()); // retorna um erro


