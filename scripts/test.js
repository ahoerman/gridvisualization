const controller = require("../controllers/controller");
const db = require("../models");

// db.sequelize.sync({ force: false }).then(async function() {
//   let things = await controller.getStateData("MA");
//       console.log(`things: ${things}`);
// });

db.sequelize.sync({ force: false }).then(function() {
  controller.getStateData("MA")
    .then((things) => { 
      console.log(`things:`);
      console.table(things);
      return Promise.resolve();
    }).then(() => db.sequelize.close());
});

