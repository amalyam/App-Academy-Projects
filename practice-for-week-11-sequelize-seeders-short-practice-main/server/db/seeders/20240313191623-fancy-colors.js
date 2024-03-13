"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Colors", [
      {
        name: "orange",
        createdAt: new Date("2020-03-15"),
        updatedAt: new Date("2022-06-01"),
      },
      {
        name: "magenta",
        createdAt: new Date("2020-03-15"),
        updatedAt: new Date("2022-06-01"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Colors", {
      name: ["orange", "magenta"],
    });
  },
};
