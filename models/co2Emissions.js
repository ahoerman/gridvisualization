module.exports = function(sequelize, DataTypes) {
  const Co2Emissions = sequelize.define("Co2Emissions", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }  
  });

  Co2Emissions.associate = function(models){
    Co2Emissions.belongsTo(models.EnergySource);
    Co2Emissions.belongsTo(models.State);
  };  

  return Co2Emissions;
}