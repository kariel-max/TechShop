import * as addItems from './addItem.cart.controller'
import * as removeItems from './removeItem.cart.controller'

export const cartItemController = {
    ...addItems,
    ...removeItems,
}