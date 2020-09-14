var prompt = require('prompt');

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'q', description: 'Do you like prompt?' }, function (
    err,
    result
  ) {
    if (result.q === 'y' || result.q === 'n') {
      console.log('Answer received');
    } else {
      displayPrompt();
    }
  });
}

displayPrompt();



//Exercice Lodash
//var lodash = require('lodash');
//var output = lodash.without([1,2,3],1);

//console.log(output);