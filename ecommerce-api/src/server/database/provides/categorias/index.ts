import * as getName from "./categorias"
import * as getEspecif from "./getEspecificacoes"

export const categoriasProviders = {
    ...getName,
    ...getEspecif,
}