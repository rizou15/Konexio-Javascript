var arr = [{

    firstName: 'Daniel',
    surname: 'Beckham',
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(myId);

function myId(name) {
    return name = (name.firstName + ' ' + name.surname);
}
console.log(arr2);
