function firstFactorial(num) {

    var result = 0;
    for (var i = 1; i <= num; i++) {


        result = result + num + 2;
    }

    return result;
}

console.log(firstFactorial(4));