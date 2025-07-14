import * as create from "./createProduto";
import * as deleteProduto from "./deleteProduto";
import * as getAll from "./getProdutos";
import * as getProduto from "./getProduto";
import * as categorias from "./categorias"

export const produtoControllers = {
    ...create,
    ...deleteProduto,
    ...getAll,
    ...getProduto,
    ...categorias,
};