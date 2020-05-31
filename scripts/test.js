const controller = require("../controllers/controller");
const db = require("../models");

db.sequelize.sync({ force: false }).then(function() {
  controller.getStateData("NH")
    .then((things) => { 
      console.log(`things: ${things}`);
      return Promise.resolve();
    }).then(() => db.sequelize.close());
});

