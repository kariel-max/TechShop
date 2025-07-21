import { categorias, type ICategorias } from "../../seeds/categorias_0001";

export const getCategorias = async (): Promise<ICategorias[] | Error> => {
    try {
    const categoria = await categorias;
    if (!categoria) {
        return new Error("Categoria não encontrada");
    }
    return categoria;
} catch (error) {
        return new Error("Erro ao buscar a categoria");
    }
};