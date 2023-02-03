

// var ultimoItem = videoGames.pop();

// var addItem = videoGames.push('Xbox Series X');


// for (var numero = 0; numero < 5; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while ( i <= 10 ) {
//   console.log(i);
//   i = i + 5;
// }

var videoGames = ['Switch', 'PS5', 'Xbox', '3DS']; 

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  if(videoGames[item] === 'PS5') {
    break;
  }
}

var frutas = ['Banana', 'Abacaxi', 'Limão', 'Uva', 'Kiwi'];
frutas.forEach(function(fruta, index) {
  console.log(fruta, index)
})

var Brasil = ['1958', '1962', '1970', '1994', '2002']
Brasil.forEach(function(ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`)
})