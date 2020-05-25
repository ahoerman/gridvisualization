module.exports = function (sequelize, DataTypes) {
    const State = sequelize.define("Coal", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        abbrev: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        population: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    State.associate = function (models) {
        State.hasMany(models.Co2Emissions);
    };

    return State;
}