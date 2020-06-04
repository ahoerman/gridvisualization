//seeder file written by Letty Bedard for the Appleseed Grid Visualization project

//data is expected to be in .tsv files, see readme for details on expected file formatting and naming

require("dotenv").config({ path: __dirname + "/../"});

// process.env.NODE_ENV = "seedProduction";
process.env.NODE_ENV = "development";

const fileLocation = "/../data/";
const year = "2018";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let errors = []; 

let data = []; //will be parsed data from file 
let results = []; //will be array of objects from generation data

let plantData = []; //will be array of ojbects from plant data
let generatorData = []; //will be array of objects from generator data

//read and parse plant data
fs.readFile(__dirname + fileLocation + year + "_plant_test.tsv", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  plantData = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t"
  });
});

//read and parse generator data
fs.readFile(__dirname + fileLocation + year + "_plant_test.tsv", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  data = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t"
  });

  generatorData = data.filter((row) => {
    //we don't want to get retired plants
    return (!(row["GENSTAT"] === "RE"));
  });
});

const seedMe = async () => {
  //fill state table first, for linking to others use stateInfo
  for (const { State, Abbrev, Population } of stateData) {
    await db.State.create({
      fullName: State,
      abbrev: Abbrev,
      population: Population
    }).then(({ fullName, abbrev, id }) => {
      stateInfo[abbrev] = id;
      stateInfo[fullName] = id;
    });
  };

  //add energy sources to table as needed, save id for later
  for (const element of results) {
    // console.table(element);
    if (!nrgSrcObj[element["ENERGY SOURCE"]]) {
      await db.EnergySource.create({
        typeName: element["ENERGY SOURCE"]
      }).then(({ id, typeName }) => {
        nrgSrcObj[typeName] = id;
        nrgId = id;
      });
    }
    else {
      nrgId = nrgSrcObj[element["ENERGY SOURCE"]];
    }

    await db.Generation.create({
      //grab first two chars only, catches US - Total
      StateId: stateInfo[element["STATE"].slice(0,2)],
      EnergySourceId: nrgId,
      amount: parseInt(element["GENERATION (Megawatthours)"])
    });  
  }

  //fill co2 emissions table
  for (const row of co2Data) {
    console.table(row);
    await db.Co2Emissions.create({
      StateId: stateInfo[row.State],
      EnergySourceId: nrgSrcObj[row["Energy Source"]],
      amount: parseInt(row["CO2 (Metric Tons)"])
    });
  }
};

db.sequelize.sync({ 
  force: true 
}).then(async function() {
  await seedMe();
  db.sequelize.close();
});
