const {Sequelize} = require('sequelize');

module.exports.sequelize = new Sequelize('database',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql'
    });
