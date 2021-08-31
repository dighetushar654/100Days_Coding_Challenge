function secondHigh(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            } 
    }
  }
  return arr[arr.length-2];
}

const arr = [2,5,9,7,6,4,8];
console.log(secondHigh(arr));