"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          titleCased() {
            for (let i = 0; i < this.name.length; i++) {
              if (
                (i === 0 && this.name[0] !== this.name[0].toUpperCase()) ||
                (this.name[i] === " " &&
                  this.name[i + 1] !== this.name[i + 1].toUpperCase())
              ) {
                throw new Error("Name must be title cased.");
              }
            }
          },
        },
      },
      description: DataTypes.STRING,
      territory: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 240],
            msg: "Fact cannot be longer than 240 characters.",
          },
        },
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: {
            args: [0],
            msg: "Millimeters cannot be less than 0.",
          },
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Insect",
    }
  );
  return Insect;
};
