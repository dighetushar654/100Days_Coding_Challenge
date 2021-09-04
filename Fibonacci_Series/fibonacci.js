function fibonacci(n) {
    var f1 = 0, f2 = 1, sum;
    for (let i = 1; i <= n; i++) {
        sum = f1 + f2;
        f1 = f2;
        f2 = sum;
    }
    return f2;
}

console.log(fibonacci(5));