'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ICarrinho', {

        id:  { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
          user_Id: {
              type: Sequelize.INTEGER,
        references: { model: 'IUsuario', key: 'id' },
        onDelete: 'CASCADE'
          },
           produto_id: {
        type: Sequelize.INTEGER,
        references: { model: 'IProduto', key: 'id' },
        onDelete: 'CASCADE'
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('ICarrinho');
  }
};
