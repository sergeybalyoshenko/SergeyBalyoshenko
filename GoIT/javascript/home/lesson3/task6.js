function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }
  //console.log(result);
    return result;
}

pow(3, 2);
pow(1, 100);