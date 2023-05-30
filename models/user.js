'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{isEmail: true}
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true
    }

  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = models => {
    User.hasMany(models.post, { foreignKey: 'user_id' })
    User.hasMany(models.comments, { foreignKey: 'post_id' })
  }
  return User;
};