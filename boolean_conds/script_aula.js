var possuiGraduacao = false;
var possouDoutorado = true;

if (possuiGraduacao) {
  console.log('Possui Graduação.');
} else if (possouDoutorado) {
  console.log('Possui Doutorado.');
} else {
  console.log('Não possui nada.')
}


var nome = "Guilherme";

if(nome) {
  console.log(nome);
} else {
  console.log("Nome não existe.")
}

if((5-5) || 5+5){
  console.log("Verdadeiro");
} else {
  console.log("falso")
}

var corFavorita = "Vermelho";

switch (corFavorita) {
  case "Azul" :
    console.log("Azul é a cor do céu, azul é a cor do mar. Azul é o nosso time, e o nosso time vai ganhar!");
    break;

  case "Vermelho" :
    console.log("Com meu manto sagrado! A Bandeira na mão! O Maraca é nosso! Vai começar a festa!");
    break;
  
  case "Amarelo" :
  console.log("Amarelo é legal!");
  break;

  default:
    console.log("Escolhe uma cor decente, na moral...")
}