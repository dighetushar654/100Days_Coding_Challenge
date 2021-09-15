// Given an array A of positive integers.
// Your task is to find the leaders in the array.
// An element of array is leader if it is greater
// than or equal to all the elements to its right side.
// The rightmost element is always a leader. 

let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;

function printLeader(arr, n) {
    for (let i = 0; i < n; i++) {
        let j;
        for(j = i+1; j < n; j++) {
            // check the value is less j value so travers the right side
            if (arr[i] <=arr[j])
                break;
        }
        if(j == n)
            console.log(arr[i], " ");
    }
}

printLeader(arr, n);

