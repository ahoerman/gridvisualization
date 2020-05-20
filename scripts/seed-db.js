//seeder file written by Letty Bedard
//expects data to be in single .tsv file

require("dotenv").config({ path: __dirname + "/../"});

process.env.NODE_ENV = "development";

const fileLocation = "/../data/test_generation_2019.tsv";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let results = []; //will be array of arrays of objects

let data = []; //will be parsed data from file 

fs.readFile(__dirname + fileLocation, "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  data = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t"
  });

  data.forEach((row) => {
    let placed = false;
    for (let i = 0; i < results.length; i++) {
      if (results[i][0]["ENERGY SOURCE"] === row["ENERGY SOURCE"]) {//this is the array it belongs in
        results[i].push(row);
        placed = true;
        break;
      }
    };
    //if we get out of the for without matching add a new one
    if (!placed) {
      results.push([row]);
    }
  });
});

const seedMe = async () => {
  for (const result of results) {
    console.log(result);
    await db.EnergySource.create({
      typeName: result[0]["ENERGY SOURCE"]
    }).then(async ({ id }) => {
      result.forEach(async (element) => {
        await db.Generation.create({
          year: element["YEAR"],
          month: element["MONTH"],
          stateAbbrev: element["STATE"],
          prodType: element["TYPE OF PRODUCER"],
          EnergySourceId: id,
          amount: element["GENERATION (Megawatthours)"]
        });
      });
    });
  }
};

db.sequelize.sync({ 
  force: true 
}).then(async function() {
  await seedMe();
  db.sequelize.close();
});