'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ordenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // nombre EXACTO de la tabla referida (según la migración de Usuario)
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      nombreCliente: {
        type: Sequelize.STRING
      },
      telefonoCliente: {
        type: Sequelize.INTEGER
      },
      emailCliente: {
        type: Sequelize.STRING
      },
      modeloPc: {
        type: Sequelize.STRING
      },
      numeroSeriePc: {
        type: Sequelize.DOUBLE
      },
      estadoInicial: {
        type: Sequelize.STRING
      },
      accesoriosEntregados: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ordenes');
  }
};