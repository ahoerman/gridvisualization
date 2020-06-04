module.exports = function(sequelize, DataTypes) {
  const Plant = sequelize.define("Plant", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    plantName: {
      type: DataTypes.STRING,
      allowNull: false  
    },

    orisNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    primaryFuel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fuelCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    annualGeneration: {
      type: DataTypes.INTEGER
    },
    annualCO2: {
      type: DataTypes.INTEGER
    },
    annualCO2perMWH: {
      type: DataTypes.INTEGER
    }
  });

  Plant.associate = function(models){
    Plant.belongsTo(models.State, {
      foreignKey: {
        // allowNull: false
      }
    });
  };

  return Plant;
}