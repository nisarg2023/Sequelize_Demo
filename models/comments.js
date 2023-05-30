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
            type: DataTypes.STRING,
            get(){
                const rawValue = this.getDataValue('name');
                return rawValue ? rawValue.toUpperCase() : null;
            }
        },
        body: {
            type: DataTypes.TEXT("medium"),
            set(value){
                 this.setDataValue('body', `========> ${value}`);   
            }
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

    Comments.associate = models => {
       
        Comments.belongsTo(models.User,{foreignKey: 'user_id'})
        Comments.belongsTo(models.post, { foreignKey: 'post_id' })
       
    }

    return Comments;
};