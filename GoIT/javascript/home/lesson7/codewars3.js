var make_lazy = function (operation, a, b) {
    var args = arguments;
    return function(){
        return args[0].apply(args, [].splice.call(args, 1))
    };
    return arguments[0];
};
var add = function (a, b) {
    return a + b;
};
var double = function (n) {
    return n * 2;
};