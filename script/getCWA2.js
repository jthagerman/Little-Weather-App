const fs = require("fs");
const axios = require("axios")

let rawdata = fs.readFileSync("./cords.json");
let locationDataFromJson = JSON.parse(rawdata);



async function getData(lat, lng) {
  try{
    const weather = await axios.get(`https://api.weather.gov/points/${lat},${lng}`)
    let data = weather.data
    //console.log(data.properties.cwa)
    return {lat: lat, lng: lng, cwa: data.properties.cwa}

  }catch(error){
    //console.log(error)
  }
}
async function doSomething() {
  const x = await Promise.all(
    locationDataFromJson.map((data) => {

      const weather = getData(data.lat,data.lng)
      return weather


    })


  )
  return x


}

async function runDoSomething() {
  try{
    (async () => {
      const records = await doSomething();
      fs.writeFile ("cwa1.json", JSON.stringify(records), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    })();


  }catch(error){
    console.log(error)
  }
}

runDoSomething()
