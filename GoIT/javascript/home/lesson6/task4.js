var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

    function sortAge(nameA, nameB) {
        return nameA.age - nameB.age;
    }

    people.sort(sortAge);

    console.log(people[0].age);

    for (var i = 0; i < people.length; i++) {
    console.log(people[i].name + ' - ' + people[i].age);
    }




