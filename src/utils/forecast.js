const request=require('request');

const address=process.argv;
console.log(address);
const forecast= (longitude,lattitude,callback)=>
{
const  url='https://api.darksky.net/forecast/aa60819cfef2bb97853bcf355efaefad/'+ lattitude +','+ longitude +'?lang=hi';
request({url:url,json:true},(err,res)=>{
if(err)
{
    callback('Not able to connect with Location Server',unndefined);
}else if(res.body.currently.length===0)
{
    callback('Not able to find  Location',unndefined);
}else{
    callback (undefined,(res.body.daily.data[0].summary +' It is Currently ' 
     + res.body.currently.temperature +' degrees out '+ res.body.currently.precipProbability))
}
})
}

// forecast(-75.408,75.408,(err,data)=>
// {
//     console.log('error',err);
//     console.log('data',data)
// })
module.exports=forecast;