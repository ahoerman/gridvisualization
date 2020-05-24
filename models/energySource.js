module.exports = function(sequelize, DataTypes) {
  const EnergySource = sequelize.define("EnergySource", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]  
    },
    avgCO2perKwh: {
      type: DataTypes.INTEGER
    }   
  });

  EnergySource.associate = function(models){
    EnergySource.hasMany(models.Generation);
    EnergySource.hasMany(models.Co2Emissions);
  };

  return EnergySource;
}