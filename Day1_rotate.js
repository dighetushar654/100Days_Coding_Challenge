function rotate(arr, n) {
    for(let i = 0; i < n; i++) {
        let el = arr.shift();
        arr.push(el);
    }
    return arr;
}

let arr = [1,2,3,4,5];
var n = 3;
console.log(rotate(arr, n));
