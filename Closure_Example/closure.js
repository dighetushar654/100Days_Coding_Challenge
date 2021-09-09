function outer() {
    let name = "Tushar";
    function inner(items) {
        console.log(`Hello ${name}`);
    }
    inner(name);
}

outer();