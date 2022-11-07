const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'user', '1808', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;