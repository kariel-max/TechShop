import { createProdutos } from "./createProduto";
import { deleteProduto } from "./deleteProduto";
import { getProdutos } from "./getProdutos";
import { getProduto } from "./getProduto";
import { getCategorias, getEspecificacoes } from "./categorias"
import { AllProdutos } from "./AllProdutos";

export const produtoControllers = {
    createProdutos,
    deleteProduto,
    getProdutos,
    getProduto,
    getCategorias,
    getEspecificacoes,
    AllProdutos
};