'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Comments.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.TEXT("medium")
        },
    post_id: {
            type: DataTypes.TEXT("medium")
        },
        user_id: {
            type: DataTypes.INTEGER
        }


    }, {
        sequelize,
        modelName: 'comments',
    });

    Comments.model = models => {
        Comments.hasMany(models.Users)
        Comments.hasMany(models.post)
    }

    return Comments;
};