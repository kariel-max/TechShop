import * as deleteUser from './delete.user.controller'
import * as updateUser from './update.user.controller'
import * as getUser from './get.user.controller'

export const userController = {
    ...deleteUser,
    ...getUser,
    ...updateUser,
}