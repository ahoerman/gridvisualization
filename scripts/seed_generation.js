//seeder file written by Letty Bedard
//expects data to be in single .tsv file

// Once file is read data is first sorted into and array of arrays of like state AND energy source. Then those arrays are reduced to an array of single objects with the total of that type of energy source per state. 

//***FOR LATER***
//Finally, that array of objects is sorted into an array of arrays of objects where the objects all have the same energy source (to save DB calls)


require("dotenv").config({ path: __dirname + "/../"});

process.env.NODE_ENV = "development";

const fileLocation = "/../data/2019_generation_all.tsv";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let results = []; //will be array of arrays of objects

let reducedResults = []; //will be array of objects

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

  data.filter((row) => {
    return row["TYPE OF PRODUCER"] === "Total Electric Power Industry" //we only want the total industry
  }).forEach((row) => {
    let placed = false;
    for (let i = 0; i < results.length; i++) {
      if ((results[i][0]["STATE"] === row["STATE"]) && 
          (results[i][0]["ENERGY SOURCE"] === row["ENERGY SOURCE"])) { //state and source match
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
  
  reducedResults = 
    results.map((stateSourceArray) => {
      let sum = 0;
      for (let i = 0; i < stateSourceArray.length; i++) {
        sum += parseInt(stateSourceArray[i]["GENERATION (Megawatthours)"]);
      }
    
      const singleSourceStateObj = 
      {
        "STATE": stateSourceArray[0]["STATE"],
        "ENERGY SOURCE": stateSourceArray[0]["ENERGY SOURCE"],
        "GENERATION (Megawatthours)": sum
      };
    
      // console.log("SINGLE SOURCE OBJ")
      // console.log(JSON.stringify(singleSourceStateObj));
    
      return singleSourceStateObj;
  });    
});

const seedMe = async () => {
  console.log(`\n reduced results in seedme \n`);
  console.log(reducedResults);
  for (const element of reducedResults) {
    //console.log(result);
    await db.EnergySource.findOrCreate({
      where: {
        typeName: element["ENERGY SOURCE"]
      }
    }).then(async (gotIt) => {
      console.log("result of findOrCreate: ");
      console.log(JSON.stringify(gotIt));
      console.log(`grab the fk: ${gotIt[0]["id"]}`);
      await db.Generation.create({
        stateAbbrev: element["STATE"],
        EnergySourceId: gotIt[0]["id"],
        amount: element["GENERATION (Megawatthours)"]
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