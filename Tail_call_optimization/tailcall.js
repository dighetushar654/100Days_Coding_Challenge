'use strict'; 
function factorial(n, total = 1) {
    console.trace();
    if (n === 0) {
        return total;
    }
    // proper tail call
    return factorial(n - 1, n * total);
}
factorial(2);