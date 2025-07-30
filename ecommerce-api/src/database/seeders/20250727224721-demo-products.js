"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("IProduto", [
      {
        name: "saia",
        preco: 123,
        estoque: 12,
        discount: "15%",
        rating: 6.7,
        categoria: "ruopas",
        descricao: "muito bom",
        loja: "xcode",
        tipo: "ab",
        image: "asdfasdfasdfafdasdfasdfaf",
        precoOriginal: 200,
      },
      {
        name: "saia",
        preco: 123,
        estoque: 12,
        discount: "15%",
        rating: 6.7,
        categoria: "ruopas",
        descricao: "muito bom",
        loja: "xcode",
        tipo: "ab",
        image: "asdfasdfasdfafdasdfasdfaf",
        precoOriginal: 200,
      },
      {
        name: "saia",
        preco: 123,
        estoque: 12,
        discount: "15%",
        rating: 6.7,
        categoria: "ruopas",
        descricao: "muito bom",
        loja: "xcode",
        tipo: "ab",
        image: "asdfasdfasdfafdasdfasdfaf",
        precoOriginal: 200,
      },
      {
        name: "saia",
        preco: 123,
        estoque: 12,
        discount: "15%",
        rating: 6.7,
        categoria: "ruopas",
        descricao: "muito bom",
        loja: "xcode",
        tipo: "ab",
        image: "asdfasdfasdfafdasdfasdfaf",
        precoOriginal: 200,
      },
      {
        name: "saia",
        preco: 123,
        estoque: 12,
        discount: "15%",
        rating: 6.7,
        categoria: "ruopas",
        descricao: "muito bom",
        loja: "xcode",
        tipo: "ab",
        image: "asdfasdfasdfafdasdfasdfaf",
        precoOriginal: 200,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("IProduto", null, {});
  },
};
