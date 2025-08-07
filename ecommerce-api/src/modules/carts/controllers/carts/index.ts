import {createCartController} from './create.cart.controller'
import {deleteCartController} from './delete.cart.controller'
import {getCartController} from './get.cart.controller'
import {getAllCartController} from './getAll.cart.controller'
import {updateCartController} from './update.cart.controller'

export const cartController = {
    createCartController,
    deleteCartController,
    getAllCartController,
    getCartController,
    updateCartController
}