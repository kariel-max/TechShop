'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('IProduto', { 
       id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          preco: {
              type: Sequelize.FLOAT,
              allowNull: false,
          },
          estoque: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          rating: {
              type: Sequelize.FLOAT,
              allowNull: true
          },
          discount: {
              type: Sequelize.STRING,
              allowNull: true
          },
          categoria: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          descricao: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          loja: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          tipo: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          image: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          precoOriginal: {
              type: Sequelize.STRING,
              allowNull: true,
          }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('IProduto');
  }
};
