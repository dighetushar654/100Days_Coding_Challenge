const myObject = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = myObject.getX;
  console.log("befor bind() object with function", unboundGetX()); 
  // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = myObject.getX.bind(myObject);
  console.log("after bind() object with function", boundGetX());
  // expected output: 42
  

  const myObject2 = {
      x: 42
  }

  function getX2() {
      console.log(`value of x after binding getX2() with object myObject2 is ${this.x}`)
  }

  let bindFun = getX2.bind(myObject2);
  bindFun();