for (var i = 1; i <= 100; i++) {
    var output = '';
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0 && i % 3 !== 0) {
        output += 'Buzz';
    }

    console.log(output || i);
}