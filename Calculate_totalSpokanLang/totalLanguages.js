import fetch from 'node-fetch';

async function TotalLanguages (){
    var totalLanguages=[]
    const response = await fetch('https://restcountries.com/v2/all')
    const result = await response.json();
    // console.log(result);
    result.forEach(country => {
        country.languages.forEach(item => {
          const find = totalLanguages.filter(data => data === item.name)
          if(find.length === 0){
              totalLanguages.push(item.name)
          }
        })
    });
    console.log(`${totalLanguages.length} diffrent languages in the countries API`); 
}
TotalLanguages();