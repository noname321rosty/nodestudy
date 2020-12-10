const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class UserModal extends Model {
}

UserModal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize})

module.exports = UserModal;
