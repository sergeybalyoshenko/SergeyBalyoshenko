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

}

//var fridge = new Fridge(200);
//fridge.addFood("котлета"); // ошибка, холодильник выключен

//// создать холодильник мощностью 500 (не более 5 еды)
//var fridge = new Fridge(500);
//fridge.enable();
//fridge.addFood('котлета');
//fridge.addFood('сок', 'зелень');
//fridge.addFood('варенье', 'пирог', 'торт'); // ошибка, слишком много еды

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log (fridgeFood);
//alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

//alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
console.log (fridge.getFood());