import * as createOrder from './create.order.controller'
import * as deleteOrder from './delete.order.controller'
import * as getOrder from './get.order.controller'
import * as getAllOrder from './getAll.order.controller'
import * as updateOrder from './update.order.controller'

export const orderController = {
    ...createOrder,
    ...deleteOrder,
    ...getAllOrder,
    ...getOrder,
    ...updateOrder,
}