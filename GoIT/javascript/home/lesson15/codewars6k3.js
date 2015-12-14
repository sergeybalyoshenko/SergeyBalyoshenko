function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
};

function construct(Class) {
    var arr = Array.prototype.slice.call(arguments, 1);
    var obj = Object.create(Class.prototype);
    Class.apply(obj, arr);
    return obj;
}

var greeting = construct(Greeting, 'John');

console.log( greeting );