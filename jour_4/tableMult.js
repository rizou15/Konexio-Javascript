var multiplier = 3;

function tableMult(multi) {

  var result = 0;
  for (var i = 1; i <= 10; i++) {
console.log(multi);
    if (i > 1 && multiplier > 1) {
      result += (i * multiplier) + ' ' ;
    }
  }
  return result;
}

console.log(tableMult());

// presque terminé , revoir syntaxe pour formules