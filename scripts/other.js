// sort by energy Source

// result =
// [
//   [all rows with energy source 1 (ie total)]
//   [all rows with energy source 2]
//   [etc]
// ]

// Loop through array 
// for each type in array 
// insert all items in inner array with energySource type

// using quicksort or mergesort?

// each row (obj with col&val pairs)
//   check each result[i] {
//     if row.energySource = result[i][0].energySource
//       then result[i].push(row)
//   }
//   else result.push([row])

// dump result into db
// result.foreach((engSrcGrp) => {
//   insert engSrcGrp[O].energySource into energySource table, grab id for fk
//   engSrcGrp.foreach((row) => {
//     insert into table with energySource fk 
//   });
// });

require("dotenv").config({ path: __dirname + "/../"});

process.env.NODE_ENV = "development";

const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const db = require("../models");

let results = []; //will be array of arrays of objects

//read in the file
let data = [
]; 

fs.readFile(__dirname + "/../data/test_generation_2019.tsv", "utf8", (err, input) => {
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

// {
//   "NH" = {
//     stateName =  "New Hampshire",
//     stateAbbrev =  "NH",
//     population = "1,234,567",
//     generation = [{
//       coal: 12  
//     },{
//       petroleum = 34
//     },{
//       nuclear = 45
//     },{
//       hydro = 76
//     },{
//       solar = 87
//     },{
//       other = 24
//     }],
//     co2emission: [{
//       coal = 123
//     },{
//       petroleum = 456
//     },{
//       naturalGas = 789
//     }]
//   }
// }