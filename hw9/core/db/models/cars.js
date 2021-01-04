const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class CarModal extends Model {
}

module.exports = (client, DataTypes) => {
    const car = client.init(CarModal, {
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


const user = require('./users');
CarModal.belongsTo(user, {foreignKey: 'user_id'});

const file = require('./file')(client,DataTypes);

CarModal.hasMany(file, {
    type: DataTypes.INTEGER,
    foreignKey: 'file_id'
});

return car;
};
