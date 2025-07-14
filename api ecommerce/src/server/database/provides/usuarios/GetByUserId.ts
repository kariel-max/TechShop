import IUsuario from "../../models/usuario";

export const getByUserId = async (id: number): Promise<IUsuario | Error> => {
    try {
        const result = await IUsuario.findOne({
            where: {id}
        });
        if (result) return result.toJSON() as IUsuario;
        return new Error('Registro não encontrado!')
    } catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro!');
    }
}