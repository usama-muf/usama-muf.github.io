const { Sequelize } = require('sequelize');

//  Passing parameters separately (other dialects)
const sequelize = new Sequelize('nodeTemp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;