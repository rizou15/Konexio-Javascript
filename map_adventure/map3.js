var arr = ['m','n','o','p'];
var arr2 = arr.map(myLetters);

function myLetters(alphabet){
    return alphabet.toUpperCase();
}
console.log(arr2);