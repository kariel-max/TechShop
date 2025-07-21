import * as yup from "yup";
import { validation } from "../../shared/middleware";
export const produtosListBody = validation((getSchema)=>({
    body: getSchema(yup.object().shape({
        name:yup.string().required(),
        tipo:yup.string().required(),
        loja:yup.string().required(),
        valor:yup.number().required(),
        estoque:yup.number().required(),
        descricao:yup.string(),
        urlImagens:yup.string(),
    }))
}))