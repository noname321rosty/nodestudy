module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      model: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      car_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'cars',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
