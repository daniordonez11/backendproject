'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ordenes', 'clienteId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ordenes', 'clienteId');
  }
};

