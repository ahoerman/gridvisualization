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

module.exports = router;
