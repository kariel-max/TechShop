import * as createProduct from './create.product.controller'
import * as deleteProduct from './delete.product.controller'
import * as getProduct from './get.product.controller'
import * as getAllProduct from  './getAll.product.controller'
import * as updateProduct from './update.product.controller'

export const productController = {
    ...createProduct,
    ...deleteProduct,
    ...getAllProduct,
    ...getProduct,
    ...updateProduct,
}