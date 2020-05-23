const router = require("express").Router();
const db = require("../models");

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
