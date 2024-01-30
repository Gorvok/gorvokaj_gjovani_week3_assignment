module.exports = (sequelize, DataTypes) => {
    const Star = sequelize.define('Star', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      }
    });
  
    Star.associate = (models) => {
      Star.belongsTo(models.Galaxy, {
        foreignKey: 'galaxyId',
        as: 'galaxy'
      });
      Star.belongsToMany(models.Planet, {
        through: 'StarsPlanets',
        as: 'planets',
        foreignKey: 'starId'
      });
    };
  
    return Star;
  };
  