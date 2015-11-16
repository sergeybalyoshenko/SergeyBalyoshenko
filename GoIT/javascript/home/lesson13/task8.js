function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function() {
        if (!this._enabled) {
            throw new Error('Холодильник выключен');
        }
        if (food.length + arguments.length >= this._power / 100) {
            throw new Error('Слишком много еды');
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.getFood = function() {

        return food.slice();
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    };
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
//alert( fridge.getFood().length ); // 4
console.log(fridge.getFood().length);

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    //alert( item.title ); // сок, зелень
    console.log (item.title);
    fridge.removeFood(item);
});

//alert( fridge.getFood().length ); // 2
console.log(fridge.getFood().length);