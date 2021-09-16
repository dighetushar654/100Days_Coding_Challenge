// javascript function to swap two numbers without using third veriable
function swapNumber (num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    return [num1 ,num2];
}

let num1 = 5;
let num2 = 4;
const swapResult = swapNumber(num1, num2);
console.log(`num1 is ${swapResult[0]} num2 is ${swapResult[1]}`);