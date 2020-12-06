const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class CarModal extends Model {
}


CarModal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false

    },
    user_id: {
        type: DataTypes.STRING,
        foreignKey: true
    }
}, {sequelize})

module.exports = CarModal;
