import * as getAll from "./getAll"
import * as create from "./create"

export const pedidosProvides = {
    ...getAll,
    ...create,
}