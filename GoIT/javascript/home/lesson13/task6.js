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
    var timer;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log('Кофе готов!');
        //alert('Кофе готов!');
    }

    var newDisable = this.disable;
    this.disable = function() {
        newDisable.call(this);
        clearTimeout(timer);
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error('Кофеварка выключена');
        }

        timer = setTimeout(onReady, 1000);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет