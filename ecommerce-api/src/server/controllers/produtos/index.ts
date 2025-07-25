import * as createProdutos from "./createProduto";
import * as deleteProduto from "./deleteProduto";
import * as getProdutos from "./getProdutos";
import * as getProduto from "./getProduto";
import * as AllProdutos from "./AllProdutos";

export const produtoControllers = {
    ...createProdutos,
    ...deleteProduto,
    ...getProdutos,
    ...getProduto,
    ...AllProdutos
};