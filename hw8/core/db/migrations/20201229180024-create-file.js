module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('files', {
     file_id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
     car_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
              model: 'cars',
              key: 'car_id'
            }
          },
     created_at: {
            type: Sequelize.DataTypes.DATE,
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
