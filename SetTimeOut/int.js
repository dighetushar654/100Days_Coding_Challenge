function Set(x) {
    return new Promise((resolve, reject) => {
      setTimeout(function (){
        resolve(console.log(x)) 
      }, 1000);
    })
    
  }
  async function print() {
    await Set('A');
    await Set('B');
    await Set('C');
  }
  
  print();