function printNumbersTimeout() {
    var i = 1;
    var timer = setTimeout(function get() {
        console.log(i);
        if (i < 20) setTimeout(get, 100);
        i++;
    }, 100);
}


printNumbersTimeout();