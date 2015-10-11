var num;

do {
    num = prompt('Введите число больше 100', '');
} while (num <= 100 && num != null);

console.log(num);