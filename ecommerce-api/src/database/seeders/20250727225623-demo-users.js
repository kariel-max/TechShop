'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert('IUsuario', [
      {
    name: 'João da Silva',
        email: 'jf@email.com',
        senha: '123456',
        cpf: '12345678900',
        number: '11999999999',
        endereco: 'Rua das Flores, 123'
     },
    ], {});
    
  },

  async down (queryInterface) {
  
    await queryInterface.bulkDelete('IUsuario', null, {});
    
  }
};
