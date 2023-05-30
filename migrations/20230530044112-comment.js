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
    await queryInterface.createTable('comments',
    {
      id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name:{
        type: Sequelize.INTEGER
      },
      body:{
        type:Sequelize.TEXT("medium")
      },
      post_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references:{model:"posts",key:"id"}
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
        references: { model: "Users", key: "id" }
      }

    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *comments
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('comments');
  }
};
