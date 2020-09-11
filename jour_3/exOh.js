var letters = 'xxooxo';


function exOh (str) {
    var letterx = 0;
    var lettero = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i] === 'x') {

            letterx = letterx + 1;
            
        } if (str[i] === 'o') {

            lettero = lettero + 1;

        }
        
        if (letterx === lettero) {

            return true;

        } else {

            return false;
        }
    }
}

console.log(exOh('x'));

// à terminer //
// reprendre la condition et compter le nbre de x pour avoir le nbre de o équivalent
// enlever le return du for ligne 22 à 23
// suavegarder dans result
// sortir la ligne 7 du for 