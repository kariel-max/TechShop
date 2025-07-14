import * as deleteById from "./delete";
import * as singIn from "./singIn";
import * as singUp from "./singUp";
import * as verificar from "./verificarToken";
import * as putUser from "./putUser";
import * as getuser from "./getUser"

export const usuariosControllers = {
    ...singIn,
    ...singUp,
    ...deleteById,
    ...verificar,
    ...putUser,
    ...getuser,
}