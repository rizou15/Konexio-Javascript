
var prompt = require('prompt');
var min = 1;
var max = 100;
var integer = Math.floor((Math.random() * (max - min) + 1));
console.log(integer);


prompt.start();

function displayPrompt() {

  prompt.get({ name: 'choixOrdi', description: 'Quel est le nombre mystère?' }, function (err, result) {

    var taper = parseInt(result.choixOrdi);

    if (integer === taper) {
      console.log('Bravo , vous avez trouvé le nombre mystère !');

    } else if (integer > taper) {
      console.log('C\'est moins !');
      displayPrompt();

    } else {
      console.log('C\'est plus !');
      displayPrompt();

    }

  });
}
displayPrompt();



//Exercice Lodash
//var lodash = require('lodash');
//var output = lodash.without([1,2,3],1);

//console.log(output)