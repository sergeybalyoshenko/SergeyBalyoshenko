var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {

    var obj = {};

    for (var i = 0; i < arr.length; i++){
        var anagram = arr[i].toLowerCase().split('').sort().join('');
        obj[anagram] = arr[i];
    }

    var arrClean = [];

    for (var key in obj) {
        arrClean.push(obj[key]);
    }

    return arrClean;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'