import IProdutos from "../../models/produtos"

export const deleteProduto = async (name: string): Promise<Number | Error> => {
    try {
        const result = await IProdutos.destroy({where: {name}});
        if(result === 0) return new Error('Não foi possível apagar o item!')
        return result 
    } catch (error) {
        return new Error('Error ao apagar o item')
    }
}