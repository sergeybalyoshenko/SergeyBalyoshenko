function checkString(str){
    if(str.length <= 20){
        return str;
    } else{
        return str.substring(0, 20) + '...';
    }
}

console.log(checkString('qqqqqqqqqqqqqqqqqq20'));
console.log(checkString('qqqqqqqqqqqqqqqqqq25qqqqq'));