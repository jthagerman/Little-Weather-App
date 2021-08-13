const csv = require("csv-parser");
const fs = require("fs");
const parse = require("csv-parse");

const trimCords = (cord) => {

  let split = cord.split(".");

  if (split[1].length > 3) {
    let substring = split[1];
    split[1] = ("." + substring.slice(0, 3));
  }
  console.log("two values",split[0] + split[1])
  return Number(split[0] + split[1]);
};

const processFile = async () => {
  let records = [];
  const parser = fs.createReadStream(`./uszips.csv`).pipe(
    parse({

      // CSV options if any
    })
  );
  for await (const record of parser) {
    if (record[0] !== "zip") {
      //records.push(record);
      const zip = Number(record[0])
      const lat = trimCords(record[1]);
      const lng = trimCords(record[2]);
      const city = record[3];
      const state_name = record[5]
      const county_name = record[11]
      const timezone = record[17]
      const rowLoc = { zip: zip, lat: lat, lng: lng, city: city, state_name: state_name, county_name: county_name, timezone: timezone };
      records.push(rowLoc)
    }
  }
  return records;
};

(async () => {
  const records = await processFile();
  fs.writeFile ("input.json", JSON.stringify(records), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
})();
