module.exports = (sequelize, DataTypes) => {
    const StarsPlanets = sequelize.define('StarsPlanets', {
      starId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stars', // 'Stars' is the table name of the Star model
          key: 'id'
        }
      },
      planetId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Planets', // 'Planets' is the table name of the Planet model
          key: 'id'
        }
      }
    }, {
      timestamps: false // Assuming you don't want timestamps for the join table
    });
  
    return StarsPlanets;
  };
  