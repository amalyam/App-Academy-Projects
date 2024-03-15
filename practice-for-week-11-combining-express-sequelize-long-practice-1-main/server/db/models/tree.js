"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tree.init(
    {
      tree: { type: DataTypes.STRING, allowNull: false, unique: true },
      location: DataTypes.STRING,
      heightFt: {
        type: DataTypes.FLOAT,
        validate: {
          min: {
            args: [0],
            msg: "Height must have a minimum value of 0.",
          },
        },
      },
      groundCircumferenceFt: {
        type: DataTypes.FLOAT,
        validate: {
          min: {
            args: [0],
            msg: "Circumference must have a minimum value of 0.",
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
      modelName: "Tree",
    }
  );
  return Tree;
};
