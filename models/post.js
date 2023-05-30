'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    user_id:{
      type:DataTypes.INTEGER

    }
    
  }, {
    sequelize,
    modelName: 'post',
  });

  post.associate = models=>{
    console.log(models)
    post.belongsTo(models.User,{foreignKey:"user_id"})
    post.hasMany(models.comments, { foreignKey: 'post_id' })
  }

  return post;
};