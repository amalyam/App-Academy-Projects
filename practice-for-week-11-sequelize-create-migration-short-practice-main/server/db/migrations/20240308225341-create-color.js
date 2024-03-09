"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Colors", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      name: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Colors");
  },
};
