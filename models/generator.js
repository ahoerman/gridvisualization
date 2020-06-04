module.exports = function(sequelize, DataTypes) {
  const Generator = sequelize.define("Generator", {
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
    primaryFuel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    onlineYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },  
    offlineYear: {
      type: DataTypes.INTEGER
    }
  });

  Generator.associate = function(models){
    Generator.belongsTo(models.State, {
      foreignKey: {
        allowNull: false
      }
    });
    Generator.belongsTo(models.Plant, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Generator;
}