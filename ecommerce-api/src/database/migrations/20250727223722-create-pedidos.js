'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IOrder', {
      id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'IUsuario', key: 'id' },
        onDelete: 'CASCADE'
      },
          total:{ type: Sequelize.DECIMAL(10, 2), allowNull: false },
          status: {
              type: Sequelize.STRING,
              allowNull: false,
          }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('IOrder');
  }
};
