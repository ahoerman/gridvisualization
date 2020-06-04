//controller written by Letty Bedard for the Appleseed Grid Visualization project

const db = require("../models");

const resolveToJSON = (sqlzeArr) => {
  return Promise.resolve(sqlzeArr.map(foo=> foo.toJSON()));
};

const controller = {

  //takes state abbrev, returns corresponding state data as formatted object
  getStateData: function (stateAbbrev) {
    return db.State.findOne({
      where: {
        abbrev: stateAbbrev,
      },
    }).then((dbState) => {
      return db.Generation.findAll({
        where: {
          StateId: dbState["id"]
        },
        attributes: [
          "amount"
        ],
        include: [
          { //state model
            model: db.State,
            required: true,
            attributes: [
              "fullName", 
              "abbrev",
              "population"
            ]
          },{ //energy source model
            model: db.EnergySource,
            required: true,
            attributes: [
              "typeName"
            ]
          }
        ]
      }).then((fullJoinedResult) => {
        //console.log(JSON.stringify(fullJoinedResult));
        return db.Co2Emissions.findAll({
          where: {
            StateId: dbState["id"]
          },
          attributes: [
            "amount",
          ],
          include: [
            {
              model: db.EnergySource,
              required: true,
              attributes: [
                "typeName"
              ]
            }
          ]
        }).then((co2Data) => {
         // console.log(JSON.stringify(co2Data));

          let generationData = {};
          let co2emissionData = {};

          //create generation object
          for (const row of fullJoinedResult) {
            generationData[row["EnergySource"]["typeName"]] = row["amount"];
          };

          //create co2 emissions object
          for (const row of co2Data) {
            co2emissionData[row["EnergySource"]["typeName"]] = row["amount"];
          }

          const generatedResult = {
            stateName: fullJoinedResult[0]["State"]["fullName"],
            stateAbbrev: fullJoinedResult[0]["State"]["abbrev"],
            population: fullJoinedResult[0]["State"]["population"],
            generation: generationData,
            co2emission: co2emissionData
          };

          //console.table(generatedResult);
 
          return Promise.resolve(generatedResult);
          // return generatedResult;
        });
      }); 
    });
  },

  //takes state abbrev, returns corresponding plant data as formatted object
  getPlantData: function (stateAbbrev) {
    return db.State.findOne({
      where: {
        abbrev: stateAbbrev,
      },
    }).then((dbState) => {
      return db.Plant.findAll({
        where: {
          StateId: dbState["id"]
        },
        attributes: [
          "plantName",
          "latitude",
          "longitude",
          "primaryFuel",
          "fuelCategory",
          "annualGeneration",
          "annualCO2",
          "annualCO2perMWH"
        ],
        include: [
          { //state model
            model: db.State,
            required: true,
            attributes: [
              "fullName" 
            ]
          }
        ]
      }).then((fullJoinedResult) => {
        // console.log(JSON.stringify(fullJoinedResult));
        
        // const plantInfo = [];

        // for (const row of fullJoinedResult) {
        //   console.log(JSON.stringify(row));

        //   plantInfo.push({
        //     plantName:,
        //     latitude: ,
        //     longitude: ,
        //     primaryFuel
        //     stateAbbrev: fullJoinedResult[0]["State"]["abbrev"],
        //     population: fullJoinedResult[0]["State"]["population"],
        //     generation: generationData,
        //     co2emission: co2emissionData
        //   });
        // }

        const generatedResult = {
          stateName: fullJoinedResult[0]["State"]["fullName"],
          plants: fullJoinedResult
        }
        
        console.table(generatedResult);

        return Promise.resolve(generatedResult);

      }); 
    });
  },


};

module.exports = controller;