function factorial(num) {
    // using for loop
    // let fact = 1;
    // for(let i = 2; i <= num; i++) {
    //     fact = fact * i;
    // }
    // return fact;

    // Recursive way
    if(num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}


console.log(factorial(5));