function getVillainName(birthday){
    var month = ['The Evil', 'The Vile', 'The Cruel', 'The Trashy',  'The Despicable',  'The Embarrassing',
        'The Disreputable',  'The Atrocious',  'The Twirling',  'The Orange',  'The Terrifying',  'The Awkward'];
    var days = ['Mustache', 'Pickle',  'Hood Ornament',  'Raisin',  'Recycling Bin',  'Potato',  'Tomato',
        'House Cat',  'Teaspoon',  'Laundry Basket'];

    var firstName = month[birthday.getMonth()];
    var lastName = days[birthday.getDate() % 10];

    return firstName + ' ' + lastName;
}

