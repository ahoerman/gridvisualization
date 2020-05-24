module.exports = function(sequelize, DataTypes) {
  const Generation = sequelize.define("Generation", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }   
  });

  Generation.associate = function(models){
    Generation.belongsTo(models.State, {
      foreignKey: {
        // allowNull: false
      }
    });

    Generation.belongsTo(models.EnergySource, {
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Generation;
}