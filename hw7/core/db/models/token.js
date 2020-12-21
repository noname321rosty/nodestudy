const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class AuthModal extends Model {
}


AuthModal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize})

const user = require('./users');
AuthModal.belongsTo(user, {foreignKey: 'user_id'});

module.exports = AuthModal;
