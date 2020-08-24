

function vowelCount(str) {
    var voyelles = 'aeiouy';
    var counter = 0;

    for (var i = 0; i < str.length; i++) {

        if (voyelles.includes(str[i])) {

            counter = counter + 1;
        }

    }

    return counter;
}


console.log(vowelCount('hello'));

// exercice terminé //
