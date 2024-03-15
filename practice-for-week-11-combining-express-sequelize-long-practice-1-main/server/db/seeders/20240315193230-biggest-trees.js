"use strict";
const now = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Trees", [
      {
        tree: "General Sherman",
        location: "Sequoia National Park",
        heightFt: 274.9,
        groundCircumferenceFt: 102.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        tree: "General Grant",
        location: "Kings Canyon National Park",
        heightFt: 268.1,
        groundCircumferenceFt: 107.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        tree: "President",
        location: "Sequoia National Park",
        heightFt: 240.9,
        groundCircumferenceFt: 93,
        createdAt: now,
        updatedAt: now,
      },
      {
        tree: "Lincoln",
        location: "Sequoia National Park",
        heightFt: 255.8,
        groundCircumferenceFt: 98.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        tree: "Stagg",
        location: "Private Land",
        heightFt: 243,
        groundCircumferenceFt: 109,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Trees", {
      tree: {
        [Sequelize.Op.in]: [
          "General Sherman",
          "General Grant",
          "President",
          "Lincoln",
          "Stagg",
        ],
      },
    });
  },
};
