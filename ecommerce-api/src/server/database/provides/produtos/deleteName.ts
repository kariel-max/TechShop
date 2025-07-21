import {IProduto} from "../../models/produtos"

export const deleteProduto = async (name: string): Promise<number | Error> => {
    try {
        const result = await IProduto.deleteOne({where: {name}});
        if(!result) {
            return new Error('Não foi possível apagar o item!');
        }
        return result.deletedCount ?? 0
    } catch {
        return new Error('Error ao apagar o item')
    }
}