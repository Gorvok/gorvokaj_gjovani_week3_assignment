module.exports = (sequelize, DataTypes) => {
    const Planet = sequelize.define('Planet', {
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
  
    Planet.associate = (models) => {
      Planet.belongsToMany(models.Star, {
        through: 'StarsPlanets',
        as: 'stars',
        foreignKey: 'planetId'
      });
    };
  
    return Planet;
  };
  