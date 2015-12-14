function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    //this.fullName = this.firstName + ' ' + this.lastName;
    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (value) {
            var name = value.split(' ');
            if (name.length == 2) {
                this.firstName = name[0];
                this.lastName = name[1];
            }
        }
    });
}

var n = new NamedOne('John', 'Doe');

console.log( n.fullName );
n.firstName = "Bill";
console.log( n.fullName );
n.lastName = "Board";
console.log( n.fullName );
n.fullName = "Giovanni Fabbri";
console.log( n.firstName );
console.log( n.lastName );