//seeder file written by Letty Bedard for the Appleseed Grid Visualization project

//data is expected to be in .tsv files, see readme for details on expected file formatting and naming

// Once file is read data is first sorted into and array of arrays of like state AND energy source. Then those arrays are reduced to an array of single objects with the total of that type of energy source per state. 

//***FOR LATER***
//Finally, that array of objects is sorted into an array of arrays of objects where the objects all have the same energy source (to save DB calls)


require("dotenv").config({ path: __dirname + "/../"});

process.env.NODE_ENV = "development";

const fileLocation = "/../data/";
const year = "2017";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let errors = []; 
let data = []; //will be parsed data from file 
let results = []; //will be array of arrays of objects (from group sorting)
let reducedResults = []; //will be array of objects from generation data
let co2Data = []; //will be array of ojbects from co2 data
let stateData = []; //will be array of objects from state data
let stateInfo = {}; //will be obj with abbrev:id and fullName:id pairs
// let stateInfo = new Map(); //will be array of objects from state data
let nrgSrcObj = {}; //for storing source:id
let nrgId; //where we will store energy id, new or not

//read and parse generation
fs.readFile(__dirname + fileLocation + year + "_generation_all.tsv", "utf8", (err, input) => {
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
    return ((row["TYPE OF PRODUCER"] === "Total Electric Power Industry") && !(row["ENERGY SOURCE"] === "Total")) //we only want the total industry
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

//read and parse state data
fs.readFile(__dirname + fileLocation + year + "_state_pop.tsv", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  stateData = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t"
  });
});

//read and parse co2 data
fs.readFile(__dirname + fileLocation + year + "_co2_state.tsv", "utf8", (err, input) => {
  if (err) {
    console.error(err);
    return;
  }

  co2Data = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t"
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
      // stateInfo.set(dbState.abbrev, dbState.id);
    });
  };

  for (const element of reducedResults) {
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
      amount: element["GENERATION (Megawatthours)"]
    });  
  }

  for (const row of co2Data) {
    console.log(JSON.stringify(row));
    await db.Co2Emissions.create({
      StateId: stateInfo[row.State],
      EnergySourceId: nrgSrcObj["Coal"],
      amount: row["Coal"]
    });
    await db.Co2Emissions.create({
      StateId: stateInfo[row.State],
      EnergySourceId: nrgSrcObj["Petroleum"],
      amount: row["Petroleum"]
    });
    await db.Co2Emissions.create({
      StateId: stateInfo[row.State],
      EnergySourceId: nrgSrcObj["Natural Gas"],
      amount: row["Natural Gas"]
    });
  }
};

db.sequelize.sync({ 
  force: true 
}).then(async function() {
  await seedMe();
  db.sequelize.close();
});
