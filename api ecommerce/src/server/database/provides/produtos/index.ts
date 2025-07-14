import * as create from "./create"
import * as getByName from "./getByName"
import * as getByNames from "./getByNames"

export const produto_provides = {
    ...create,
    ...getByName,
    ...getByNames,
}