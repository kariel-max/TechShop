import {IProduto} from "../../models/produtos"

export const deleteProduto = async (name: string): Promise<number | Error> => {
    try {
        const result = await IProduto.destroy({where: {name}});
        if(!result) {
            return new Error('Não foi possível apagar o item!');
        }
        return result
    } catch {
        return new Error('Error ao apagar o item')
    }
}