"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Insects", [
      {
        name: "Western Pygmy Blue Butterfly",
        description:
          "Tiny butterfly with pale blue wings, found in grasslands and meadows.",
        territory: "North and South America, Europe, Asia, and Africa.",
        fact: "Females lay eggs on host plants, often legumes like clover or alfalfa.",
        millimeters: 10,
      },
      {
        name: "Patu Digua Spider",
        description:
          "One of the world's smallest spiders, barely visible to the naked eye.",
        territory: "Endemic to the Andes Mountains in Colombia.",
        fact: "Spins delicate webs to catch prey, including tiny insects.",
        millimeters: 0.37,
      },
      {
        name: "Scarlet Dwarf Dragonfly",
        description: "Small dragonfly with striking scarlet-red coloration.",
        territory: "Found in tropical regions of South and Central America.",
        fact: "Male dragonflies are highly territorial and defend their territory fiercely.",
        millimeters: 15,
      },
      {
        name: "Midget Moths",
        description:
          "Tiny moths with intricate wing patterns, often mistaken for specks of dust.",
        territory: "Widespread, found in various habitats across the globe.",
        fact: "Despite their small size, they play crucial roles in ecosystems as pollinators.",
        millimeters: 2,
      },
      {
        name: "Bolbe Pygmaea Mantis",
        description:
          "Minute praying mantis species, adept at camouflaging among foliage.",
        territory: "Native to rainforests of Central and South America.",
        fact: "Uses its agile forelegs to snatch unsuspecting prey with lightning speed.",
        millimeters: 12,
      },
      {
        name: "Microtityus Minimus Scorpion",
        description:
          "Tiny scorpion with a venomous sting, dwelling in leaf litter and soil.",
        territory:
          "Found in tropical regions of the Caribbean and South America.",
        fact: "Despite their diminutive size, they possess potent venom for hunting prey.",
        millimeters: 14,
      },
      {
        name: "Euryplatea Nanaknihali Fly",
        description:
          "Minute fly known for its parasitic behavior, laying eggs in other insects.",
        territory: "Native to tropical rainforests of South America.",
        fact: "Females deposit eggs on other insects, and larvae consume the host from within.",
        millimeters: 0.4,
      },
      {
        name: "Uranotaenia lowii Mosquito",
        description:
          "Tiny mosquito species with distinct banded legs, often found near water sources.",
        territory:
          "Distributed across tropical and subtropical regions worldwide.",
        fact: "Females require blood meals for egg development, posing a nuisance to humans.",
        millimeters: 2.5,
      },
      {
        name: "Fairyfly Wasp",
        description:
          "Microscopic wasp species, barely visible to the naked eye, known for parasitic habits.",
        territory:
          "Found worldwide in diverse habitats, often associated with vegetation.",
        fact: "They parasitize the eggs of other insects, helping control pest populations.",
        millimeters: 0.2,
      },
      {
        name: "Bayeriola orbita Beetle",
        description:
          "Smallest known beetle, measuring a mere 0.25 mm in length, discovered in tropical rainforests.",
        territory: "Found in the Amazon Rainforest and other tropical regions.",
        fact: "Their diminutive size allows them to thrive in microhabitats inaccessible to larger organisms.",
        millimeters: 0.25,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Insects", {
      name: [
        "Western Pygmy Blue Butterfly",
        "Patu Digua Spider",
        "Scarlet Dwarf Dragonfly",
        "Midget Moths",
        "Bolbe Pygmaea Mantis",
        "Microtityus Minimus Scorpion",
        "Euryplatea Nanaknihali Fly",
        "Uranotaenia lowii Mosquito",
        "Fairyfly Wasp",
        "Bayeriola orbita Beetle",
      ],
    });
  },
};
