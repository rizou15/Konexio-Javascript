
function swapCase(str) {
    // var newstring = '';
    console.log(str.toUpperCase())

    for (var i = 0; i < str.length; i++) {

        //if ( (a ou A) === 'A' )
        if (str.charAt(i) === str.charAt(i).toUpperCase()){
        console.log(str.charAt(i))

        // newstring = newstring + str.charAt(i).toUpperCase();

    }
}
}
console.log(swapCase('hello world'));

// à terminer , revoir méthode //