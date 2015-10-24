function isValidWalk(walk) {
    var ns = 0;
    var we = 0;

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                ns++;
                break;
            case 's':
                ns--;
                break;
            case 'w':
                we++;
                break;
            case 'e':
                we--;
                break;
        }
    }

    return walk.length === 10 && ns === we;
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //false
console.log(isValidWalk(['w'])); //false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //false
console.log(isValidWalk(['s','n','w','e','e','w','n','s','s','n'])); //true
