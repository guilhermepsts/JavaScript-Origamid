// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)

// Crie duas expressões que retornem NaN
var num1 = 550;
var unity = "km";
var velocidade = num1 + unity;
console.log(typeof velocidade);

var velocidadeMedia = velocidade / 2;
console.log(velocidadeMedia);

// Somar a string '200' com o número 50 e retornar 250
var number1 = +"200";
var number2 = 50;
var soma = number1 + number2;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var numerinho = 5;
console.log(++numerinho)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
