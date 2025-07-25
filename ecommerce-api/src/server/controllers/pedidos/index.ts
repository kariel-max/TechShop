import * as add from './add_produto_pedido'
import * as getAll from './getAll'

export const pedidosControllers = {
    ...add,
    ...getAll,
}