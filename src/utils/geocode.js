const request=require('request');
// const url='https://api.darksky.net/forecast/aa60819cfef2bb97853bcf355efaefad/37.8267,-122.4233?lang=hi';
// request({url:url,json:true},(err,res)=>{
// console.log(res.body.daily.data[0].summary +' It is Currently ' 
// + res.body.currently.temperature +' degrees out '+ res.body.currently.precipProbability);
// })



// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2syNzIiLCJhIjoiY2p2eWs2ZWhvMDdlejQ4bW5ycmNpbGFseSJ9.TWdgouE0hhBP_pvMCEnAJQ';
// request({url:geocodeurl,json:true},(err,res)=>
//     {
// console.log(res.body.features[0].center[0]);
//     })

const geocode=(address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/ '+ address +'.json?access_token=pk.eyJ1IjoiZ2syNzIiLCJhIjoiY2p2eWs2ZWhvMDdlejQ4bW5ycmNpbGFseSJ9.TWdgouE0hhBP_pvMCEnAJQ';
    request({url:url,json:true},(err,res)=>
    {
if(err)
{
    //console.log('Unable to connect');
    callback('Unable to connect to Location Server',undefined);
}else if(res.body.features.length===0)
{
    callback('Unable to find  Location! Try Another Search ',undefined);
}else{
    callback(undefined,{lattitude:res.body.features[0].center[1],
   longitude: res.body.features[0].center[0],
 location: res.body.features[0].place_name})
}
    })
}

// geocode('Begusarai',(err,data)=>{
// console.log('Error',err);
// console.log('Data',data);
// })
module.exports=geocode;