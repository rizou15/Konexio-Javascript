var first = 25
var second = 30

function swap(first, second) {
    var third

    third = first
    first = second
    second = third
    return [first,second];

}


console.log(swap(first, second));