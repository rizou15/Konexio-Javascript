var expression = 'I love Code';

function firstReverse(str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(firstReverse(expression));

