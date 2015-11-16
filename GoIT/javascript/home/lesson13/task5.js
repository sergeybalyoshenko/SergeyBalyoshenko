function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log('Кофе готов!');
        //alert('Кофе готов!');
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error('Кофеварка выключена');
        }

        setTimeout(onReady, 1000);
    };

}

//var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!