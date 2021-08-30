function pairSum(arr, target) {
    let result = [];
    for(let i = 0; i < arr.length; i++ ) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target ) {
                result.push([i, j]);
            }
        }
    }
    return result;
  }


const arr = [1,2,5,4,7,9];
const sum = 10;
console.log(pairSum(arr, sum));