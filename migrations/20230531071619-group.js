'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('group',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
          type: Sequelize.INTEGER
        },
        name:{
          type:Sequelize.STRING
        },
        discretion:{
          type: Sequelize.STRING
        }
        
      }
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('group');
  }
};
