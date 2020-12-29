'use strict';

const {ACCESS_TOKEN_SECRET} = require('../../configs/config');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('files', {
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
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('files');
  }
};
