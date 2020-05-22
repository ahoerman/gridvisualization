module.exports = function(sequelize, DataTypes) {
  const State = sequelize.define("State", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      len: [1]
    },
    abbrev: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER
    }   
  });

  // State.associate = function(models){
  //   State.hasMany(models.Generation);
  // };

  return State;
}