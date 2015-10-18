var array = [];

while (true) {
    var number = prompt('Введите число', '');

    if (number === '' || number === null || isNaN(number)) break;
    array.push(+number);
}

var result = 0;

for (var i = 0; i < array.length; i++){
    result += array[i];
}

console.log(result);
