"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.associate = function (models) {
        Images.belongsTo(models.Orden, {
          foreignKey: "ordenId",
          as: "orden",
        });
      };
    }
  }
  Images.init(
    {
      nombre: DataTypes.STRING,
      urlImagen: DataTypes.STRING,
      ordenId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Images",
    }
  );
  return Images;
};
