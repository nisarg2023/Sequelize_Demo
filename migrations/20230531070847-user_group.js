'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('user_group',{
      id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: { model: "Users", key: "id" }
      },
      group_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: { model: "Users", key: "id" }

      }

    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('user_group')

  }
};
