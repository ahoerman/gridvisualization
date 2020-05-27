const router = require("express").Router();
const db = require("../models");


router.get("/state", async (req, res) => {
  await db.State.findOne({
    where: {
      abbrev: (req.query.state),
    },
  }).then(async (dbState) => {
    console.log(`dbState: ${JSON.stringify(dbState)}`);
    console.log(`dbState["id"]: ${dbState["id"]}`);
    await db.Generation.findAll({
      where: {
        StateId: dbState["id"]
      },
      include: [
        {all: true}
      ]
    }).then((fullJoinedResult) => {
      console.log(`fullJoinedResult: ${JSON.stringify(fullJoinedResult)}`);
      return res.json(fullJoinedResult);
    }).catch((err) => {
      console.log(`error: ${err}`);
      res.status(422).end()
    });
  })
});
  router.get("/consumption/:energyType", async (req, res) => {
    // retrieve type
    const allowedTypes = ['Wind', 'Solar Thermal and Photovoltaic', 'Hydroelectric Conventional', 'Nuclear', 'Natural Gas', 'Petroleum', 'Coal', 'Other', 'Petroleum', 'Other Biomass', 'Wood and Wood Derived Fuels', 'Other Gases', 'Pumped Storage', 'Geothermal'];
    if (allowedTypes.includes(req.params.energyType)) {
      let query = `
      SELECT
          g.amount/s.population as "usage",
          s.abbrev
      FROM Generations g
      JOIN EnergySources e ON g.EnergysourceId = e.id AND e.typeName = "${req.params.energyType}"
      JOIN States s On s.id = g.StateId
      ORDER BY \`usage\` DESC
      LIMIT 10
      `;
      const [result, resource] = await db.sequelize.query(query);
      res.json(result);
    } else {
      // error
      res.status(500).end()
  }
});

module.exports = router;
