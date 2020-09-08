
var minvalue = 65;
var maxvalue = 90;


function rot13(str) {

    for (var i = 0; i < str.length ; i++) {
        
        var result ;

        if (minvalue < maxvalue) {
            
            String.fromCharCode(str.charCodeAt(i) + 13);

        }else if (maxvalue > minvalue) {

             String.fromCharCode(str.charCodeAt(j) - 13);


        }
        return result;
    }
}



console.log(rot13('a'));


// ne fonctionne pas, revoir syntaxe

