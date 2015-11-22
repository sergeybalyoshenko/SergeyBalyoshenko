String.prototype.myNewMethod = function () {
    return this.toUpperCase();
};

console.log( 'small fish becomes big one'.myNewMethod() );