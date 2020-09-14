var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(myAnagram);


function myAnagram(str) {
    return str.split('').reverse().join('');

}


console.log(arr2);