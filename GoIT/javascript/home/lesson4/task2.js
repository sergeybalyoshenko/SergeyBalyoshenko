function checkSpam(str){
    str = str.toLowerCase();
    if (str.indexOf('spam') >= 0 || str.indexOf('sex') >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false