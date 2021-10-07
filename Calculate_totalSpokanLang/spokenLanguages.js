import fetch from 'node-fetch';

async function spokenLanguages() {
    var lang=[]
    const response = await fetch('https://restcountries.com/v2/all',{mode:'cors'})
    const result = await  response.json();
    result.forEach(country => {
        country.languages.forEach(item => {
            // if find return index else return -1
            const find = lang.findIndex(data => data.name === item.name)
            if(find === -1){
                //no language present in lang aaray
                lang.push({name:item.name,countries:1})
            }else{
                // if language is present in lang aaray it will incres in the count of country 
                lang.splice(find, 1, {name:item.name,countries:lang[find].countries+1});
            }
        })
    });
    // compaire logic
    //if a-b then decending if b-a then accending
    let data = lang.sort((a, b) => {
        return b.countries - a.countries;
    });
    console.log(data);
}
spokenLanguages();