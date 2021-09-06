function findMissingNumber(arr, n) {
    // solve using math formula
    // time complexity O(n)
    // space complexity O(1)
    var totalSum = Math.floor((n+1)*(n+2)/2); // formula n*(n+1)/2
    for(let i = 0; i < n; i++) {
        totalSum -= arr[i]; 
    }
    return totalSum;

}

var arr = [1, 2, 3, 4, 5, 6, 8];
var n = arr.length;
console.log(findMissingNumber(arr, n));