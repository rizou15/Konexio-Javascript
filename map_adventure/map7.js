var arr =

    [{
        firstName: 'Daniel',
        surname: 'Beckham'
    }, {
        firstName: 'David',
        surname: 'Craig'
    }]

var arr2 = arr.map(identity);

function identity(name) {

    return name = {'fullname':name.firstName +' '+ name.surname};
}

console.log(arr2);