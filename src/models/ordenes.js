"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordenes extends Model {
    static associate(models) {
      console.log("Model Usuario:", models.Usuarios);
      Ordenes.belongsTo(models.Usuarios, {
        foreignKey: "usuarioId",
        as: "usuario",
      });
      Ordenes.associate = function (models) {
        Ordenes.hasMany(models.Images, {
          foreignKey: "ordenId",
          as: "imagenes",
        });
      };
    }
  }
  Ordenes.init(
    {
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios", // Asegúrate que sea el nombre exacto de la tabla Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      nombreCliente: DataTypes.STRING,
      telefonoCliente: DataTypes.INTEGER,
      emailCliente: DataTypes.STRING,
      modeloPc: DataTypes.STRING,
      numeroSeriePc: DataTypes.DOUBLE,
      estadoInicial: DataTypes.STRING,
      accesoriosEntregados: DataTypes.STRING,
      estado: DataTypes.STRING,
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ordenes",
      tableName: "ordenes", // Aquí forzas a usar la tabla con ese nombre exacto
      timestamps: true, // Si usas updatedAt y no createdAt, controla esto
    }
  );
  return Ordenes;
};
