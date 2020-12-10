module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usermodals',{
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
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
              model: 'user',
              key: 'id'
          }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('usermodals');

  }
};
