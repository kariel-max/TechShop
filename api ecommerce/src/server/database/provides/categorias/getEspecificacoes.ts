import { categorias, ICategorias } from "../../seeds/categorias_0001";

export const getEspecificacoes = async (name:string): Promise<ICategorias | Error> => {
    try {
    const categoria = await categorias.find(e => (e.name === name));
    if (!categoria) {
        return new Error("Categoria não encontrada");
    }
    return categoria;
} catch (error) {
        return new Error("Erro ao buscar a categoria");
    }
};