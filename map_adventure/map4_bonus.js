var arr = [1,2,3,4];
var arr2 = arr.map(isEven);

function isEven(str){
    return (str % 2 === 0);
}
console.log(arr2);