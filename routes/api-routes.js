const router = require("express").Router();
const db = require("../models");
const WindModel = require("../models/wind");
const SolarModel = require("../models/solar");
const NuclearModel = require("../models/nuclear");
const NaturalGasModel = require("../models/naturalgas");
const HydroModel = require("../models/hydro");
const CoalModel = require("../models/coal");
const PetroleumModel = require("../models/petroleum")

router.get("/state", (req, res) => {
  db.Generation.findAll({
    where: {
    stateAbbrev: (req.query.state),
  },
  include: [{
    model: db.EnergySource
  }]
})
    .then(currentPicked => res.json(currentPicked))
    .catch(err => res.status(422).end());
});

module.exports = router;
