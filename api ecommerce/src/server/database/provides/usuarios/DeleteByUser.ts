import IUsuario from "../../models/usuario";

export const deleteByUser = async (id: number,email: string): Promise<boolean | Error> => {
    try {
        const result = await IUsuario.destroy({
            where: {
                id,
                email
            }
        });
        if (result === 0) {
            return new Error('Nenhuma conta encotrada!')
        };
        return true;
    } catch (error) {
        console.log(error);
        return new Error('Não foi possível apagar a conta!');
    }
}