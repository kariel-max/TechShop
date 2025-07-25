import * as  create  from "./create"
import * as  getByName  from "./getByName"
import * as  getByNames  from "./getByNames"
import * as  allProdutos  from "./AllProdutos"

export const produto_provides = {
    ...create,
    ...getByName,
    ...getByNames,
    ...allProdutos,
}