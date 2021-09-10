function printLargest(arr){
    // compare the two elements and store the result and again done same task
    return arr
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');
}

let arr = [3, 30, 34, 5, 9];
console.log(printLargest(arr));