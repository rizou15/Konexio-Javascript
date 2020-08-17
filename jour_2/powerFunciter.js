var num = 3
var power = 3

function powerFunciter(num, power) {
  var result = 1;
  for (var i = 0; i < power; i++) {
    result *= num;   
  }
  return result;
}

console.log(powerFunciter(num,power));
