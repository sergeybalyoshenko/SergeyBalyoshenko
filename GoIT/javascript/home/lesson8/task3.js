function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function(){
                return this.fullName.split(' ')[0];
            },
            set: function(value){
                this.fullName = value + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function(){
                return this.fullName.split(' ')[1];
            },
            set: function(value){
                this.fullName = this.firstName + ' ' + value;
            }
        }
    });
}

var vasya = new User('Александр Пушкин');

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой