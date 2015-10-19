function isPal(string) {
    string = string.toLowerCase().split('');

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            string.splice(i, 1);
        }
    }

    var reverseString = string.reverse().join('');
    string = string.reverse().join('');

    return reverseString === string;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
