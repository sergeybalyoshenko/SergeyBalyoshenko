//Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.

function getMaxNumber(array) {
     return Math.max.apply(null, array);
}

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15