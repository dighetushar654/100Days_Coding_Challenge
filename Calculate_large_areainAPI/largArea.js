import fetch from 'node-fetch';

async function largArea (){
   let topTen=[]
    const res=await fetch('https://restcountries.com/v2/all')
    const result=await res.json();
    let data= result.sort((a,b)=>{
          return b.area - a.area
    })
    data.forEach((item,index)=>{
        if(index < 10){
            topTen.push({country:item.name,Area:item.area})
        }
    })
    console.log(topTen);
    }
largArea();