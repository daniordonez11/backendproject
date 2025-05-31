'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Ordenes, { foreignKey: 'usuarioId', as: 'ordenes' });
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    nacimiento: DataTypes.DATE,
    accesoTotal: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',  // Asegúrate que este nombre coincida con el de la tabla en la base de datos
  });
  return Usuarios;
};