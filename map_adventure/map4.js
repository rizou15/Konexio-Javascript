var arr = [1,2,3,4];
var arr2 = arr.map(myBoolean);

function myBoolean(num){
    return (num % 2 === 0);
}
console.log(arr2);