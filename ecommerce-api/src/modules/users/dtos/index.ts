import * as create from "./Create"
import * as getByUser from "./GetByUser"
import * as updateUser from "./updateUser"
import * as deleteByUser from "./DeleteByUser"
import * as getByUserId from "./GetByUserId"

export const UsuarioProvides = {
    ...create,
    ...getByUser,
    ...updateUser,
    ...deleteByUser,
    ...getByUserId,
}