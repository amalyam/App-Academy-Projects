module.exports = {
  development: {
    storage: "./dev.sqlite3",
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
  test: {
    storage: "./prod.sqlite3",
    dialect: "sqlite",
    seederStorage: "sequelize",
    // logging: false
  },
};
