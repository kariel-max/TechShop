import IUsuario from "../../models/usuario";

export const getByUser = async (email: string): Promise<IUsuario | Error> => {
    try {
        const result = await IUsuario.findOne({
            where: {email}
        });
        if (result) return result.toJSON() as IUsuario;
        return new Error('Registro não encontrado!')
    } catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro!');
    }
}