import IUsuario from "../../models/usuario"

export const updateUser = async (id: number, newData: any):Promise<void | Error>=> {
    
    try {
        const [result] = await IUsuario.update(newData, {
        where:{id:id}
        });

        if (result > 0) return;

        return new Error('Erro ao atualizar o registro!')
    } catch (erro) {
    return new Error('Erro ao atualizar o registro');
    }
}