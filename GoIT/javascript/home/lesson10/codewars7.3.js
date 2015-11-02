//Description:

// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order.
// Descending order means that you take the highest digit and place the next highest digit immediately after it.
//Examples:

//    Input: 145263 Output: 654321

//Input: 1254859723 Output: 9875543221


function descendingOrder(n){

    function desSort(a, b) {
        return b - a;
    }

    var arr = String(n).split('');

    arr = arr.sort(desSort).join('');

    arr = +arr;

    return arr;
}

console.log(descendingOrder(145263));
console.log(descendingOrder(1254859723));

