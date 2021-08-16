// const { Sequelize } = require("sequelize");
// const axios = require( "axios");
// const csv = require("csv-parser");
// const fs = require("fs");
// const parse = require("csv-parse");

// const {
//   models: { Location },
// } = require("../server/db");

// const getStuff = async () => {
//   console.log("hi")

//   let locations = await Location.findAll({limit: 5000})
//   console.log(locations.length)

//   locations.forEach((element,index) => {

//     let lat = element.lat
//     let lng = element.lng
//     locations[index] =  {lat: lat, lng: lng, zip: element.zip}
//     //console.log(locations)
//   })
//   return locations

// }
// (async () => {
//   const records = await getStuff();
//   fs.writeFile ("cords.json", JSON.stringify(records), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );
// })();

// //console.log(p)
//   // locations.forEach(element => {
//   //   let lat = element.lat
//   //   let lng = element.lng

//   //   const getCWA = async () => {
//   //     const weather = await axios.get(`https://api.weather.gov/points/${lat},${lng}`)
//   //     let cwa = weather.data.properties.cwa
//   //     console.log(cwa)

//   //   }
//   //   getCWA()
