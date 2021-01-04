module.exports = (client, DataTypes) => {
  const auth = client.define(
      'auth',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        access_token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        refresh_token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true
        },
        created_at: {
          type: DataTypes.DATE,
          default: client.fn('NOW')
        }
      },
      {
        tableName: 'auth',
        timestamps: false
      }
  );

  return auth;
};
