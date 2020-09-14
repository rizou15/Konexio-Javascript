var arr = ['apple', 'croissant', 'pear'];

var arr2 = arr.map(function (items) {

    return '<li>' + items + '</li>';

})

console.log(arr2);