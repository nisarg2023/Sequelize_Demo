'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    user_group.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model:"User",
                key:'id'
            }
            
          
        },
        group_id: {
            type: DataTypes.STRING,
            references: {
                model: "group",
                key: 'id'
            }
        },
        
      


    }, {
        sequelize,
        modelName: 'user_group',
        tableName: 'user_group',
    });

    

    return user_group;
};