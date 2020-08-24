

function isPalindrome(str) {
        var stringreverse = '';
        var strnospace = str.replace(/ /gi, '');
        var reversenospace = str.replace(/ /gi, '');
// console.log(strnospace) puis console.log(reversnospace)//
// donne la string initiale puis l'inversée, les 2 sans espaces//

        for (var i = str.length -1 ; i >= 0; i--) {
                stringreverse = stringreverse + str.charAt(i);

        }

        if (strnospace === reversenospace) {
                return true;
        } else {
                return false;
        }
}

console.log(isPalindrome('kayak'));



// exercice terminé //