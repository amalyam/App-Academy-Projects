"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Colors", {
      fields: ["name"],
      type: "unique",
      name: "constraint_unique",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Colors", "constraint_unique");
  },
};
