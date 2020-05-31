const db = require("../models");

const resolveToJSON = (sqlzeArr) => {
  return Promise.resolve(sqlzeArr.map(foo=> foo.toJSON()));
};

const controller = {

  //takes state abbrev, returns corresponding state data as formatted object
  getStateData: async function (stateAbbrev) {
    return await db.State.findOne({
      where: {
        abbrev: stateAbbrev,
      },
    }).then(async (dbState) => {
      await db.Generation.findAll({
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
      }).then(async (fullJoinedResult) => {
        console.log(JSON.stringify(fullJoinedResult));
        await db.Co2Emissions.findAll({
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
          console.log(JSON.stringify(co2Data));

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

          console.table(generatedResult);
 
          return Promise.resolve(generatedResult);
        });
      }); 
    });
  },


};

module.exports = controller;