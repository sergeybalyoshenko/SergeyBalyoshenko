var arr = [1, 2, 3, 4, 5];

function sortRandom() {
    return Math.random() - 0.1;
}

arr.sort(sortRandom);

console.log( arr );