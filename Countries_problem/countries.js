// 1. Using the countries array create the following array of arrays. The country name, the first
// three letters of the country name and the length of the country name.


const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA',
    'INDIA'
  ]

  
const count = countries.map((x) => {
    const leters = x.substring(0, 3);
    return [x.charAt(0).toUpperCase() + x.slice(1).toLowerCase(), leters, x.length];
})
console.log(count);