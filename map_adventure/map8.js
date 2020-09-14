var arr =
    [{
        firstName: 'Daniel',
        surname: 'Beckham'
    }, {
        firstName: 'David',
        surname: 'Craig'
    }]
var arr2 = arr.map(function (fullname) {

    return fullname = { firstName: fullname.firstName, surname: fullname.surname, 'fullname': fullname.firstName + ' ' + fullname.surname };

});
console.log(arr2);

