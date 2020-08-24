
function swapCase(str) {
    var newstring = '';

    for (var i = 0; i < str.length; i++) {


        newstring = newstring + str.charAt(i).toUpperCase(i) + str.substr(i);

    }
}

console.log(swapCase('hello world'));

// à terminer , revoir méthode //