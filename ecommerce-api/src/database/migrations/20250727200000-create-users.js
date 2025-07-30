'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IUsuario', {
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: true
        },
        number: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('IUsuario');
  }
};
