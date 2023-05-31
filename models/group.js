'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    group.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        discretion: {
            type: DataTypes.STRING
        }

    }, {
        sequelize,
        modelName: 'group',
        tableName: 'group',
    });

    group.associate = models => {
        group.belongsToMany(models.User, { through: 'user_group', foreignKey: 'group_id' })
        
    }
    return group;
};