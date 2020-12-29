const { ACCESS_TOKEN_SECRET } = require('../../configs/config');

module.exports = (client, DataTypes) => {
    const file = client.define('file', {
        file_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'cars',
                key: ACCESS_TOKEN_SECRET
            }
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: client.fn('NOW'),
            allowNull: false
        },
    }, {
        tableName: 'files',
        timestamps: false
    });

    return file;
};
