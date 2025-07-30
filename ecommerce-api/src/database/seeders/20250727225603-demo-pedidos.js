'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('IOrder', [
      {
        user_id: 1,
        total: 379.79,
       status: "pronto"
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('IOrder', null, {});
  }
};
