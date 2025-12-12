'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
      Registration.belongsTo(models.User, { foreignKey: 'user_id' });
      Registration.belongsTo(models.Event, { foreignKey: 'event_id' });
    }
  }
  Registration.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('registered', 'waitlisted', 'cancelled'),
      defaultValue: 'registered'
    }
  }, {
    sequelize,
    modelName: 'Registration',
  });
  return Registration;
};