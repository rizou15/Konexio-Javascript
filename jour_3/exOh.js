
var letters = 'xooxxo';

function exOh(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        var x = 'o';
        var o = 'x';
        counter = counter + str[i];
        if (x == o) {
            return true;
        } else {

            return false;
        }
    }
}
console.log(exOh(letters));

// à terminer //
// reprendre la condition et compter le nbre de x pour avoir le nbre de o équivalent//
