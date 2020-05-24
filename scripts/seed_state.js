//seeder file written by Letty Bedard
//expects data to be in single .tsv file

// Once file is read data is first sorted into and array of arrays of like state AND energy source. Then those arrays are reduced to an array of single objects with the total of that type of energy source per state. 

//***FOR LATER***
//Finally, that array of objects is sorted into an array of arrays of objects where the objects all have the same energy source (to save DB calls)


require("dotenv").config({ path: __dirname + "/../"});

process.env.NODE_ENV = "development";

const fileLocation = "/../data/2017_state_pop.tsv";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

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
});
  
const seedMe = async () => {
  for (const { State, Abbrev, Population } of data) {
    await db.State.create({
      fullName: State,
      abbrev: Abbrev,
      population: Population
    });
  }
};

db.sequelize.sync({ 
  force: true 
}).then(async function() {
  await seedMe();
  db.sequelize.close();
});