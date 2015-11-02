function spread(func, args) {
    return func.apply(this, args);
}