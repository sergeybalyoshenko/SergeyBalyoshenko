var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var maxValue = 0;
var name = '';

for (var key in tasksCompleted) {
    if (tasksCompleted[key] > maxValue) {
        maxValue = tasksCompleted[key];
        name = key;
    }
}

console.log(name + ' - ' + maxValue);