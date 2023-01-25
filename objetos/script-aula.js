var pessoa ={
  nome: 'Guilherme',
  idade: 22,
  profissao: 'Desenvolvedor FrontEnd',
  time: 'Flamengo'

}

console.log(pessoa)

/*
JEITO ANTIGO DE FAZER 

var quadrado = {
  nLados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado){
    return this.nLados * lado;
  },
}
*/

/*JEITO NOVO*/
var quadrado = {
  nLados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado){
    return this.nLados * lado;
  },
}

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height/2;
  }
}

var bg = menu.backgroundColor;