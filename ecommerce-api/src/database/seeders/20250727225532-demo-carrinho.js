'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ICarrinho', [
      {
      user_Id: 1
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ICarrinho', null, {});
  }
};
