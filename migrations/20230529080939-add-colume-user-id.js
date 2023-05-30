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
    return await queryInterface.addColumn('posts',"user_id",{
      type:Sequelize.INTEGER,
      references:{
        model:"Users",
        key:"id"
      },
      onUpdate:"CASCADE",
      onDelete:"SET NULL"

    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.removeColumn("post","user_id")
  }
};
