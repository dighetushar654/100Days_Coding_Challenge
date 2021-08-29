function secondHigh(arr) {
    let max = [];
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            max.push(arr[i+1]);
        }
    }
    return max[max.length-2];
  }

const arr = [2,5,7,9,8,10];
console.log(secondHigh(arr));