module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      car_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      model: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      carName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
  }
};
