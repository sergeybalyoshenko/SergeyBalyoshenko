var head = {
    glasses: 1
};

var table = {
    pen: 3
};

table.__proto__ = head;

var bed = {
    sheet: 1,
    pillow: 2
};

bed.__proto__ = table;

var pockets = {
    money: 2000
};

pockets.__proto__ = bed;


console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined