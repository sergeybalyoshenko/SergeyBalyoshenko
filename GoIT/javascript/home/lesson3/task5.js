var cell = 8;
var board = '';

for (var i = 0; i < cell; i++) {
    for (var j = 0; j < cell; j++) {
        if ((i + j) % 2 === 0) {
            board += '#';
        }
        else {
            board += ' ';
        }
    }
    board += '\n';
}

console.log(board);