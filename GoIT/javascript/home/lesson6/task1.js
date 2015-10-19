var obj = {
    className: 'open menu'
};
obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }

    obj.className = classes.join(' ');

}

removeClass(obj, 'open');
removeClass(obj, 'blabla');
removeClass(obj, 'menu');

console.log( obj.className );
console.log( obj );