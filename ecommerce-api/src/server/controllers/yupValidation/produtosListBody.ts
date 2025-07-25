// biome-ignore lint/performance/noNamespaceImport: <explanation>
import * as yup from "yup";
import { validation } from "../../shared/middleware";
export const produtosListBody = validation((getSchema)=>({
    body: getSchema(yup.object().shape({
        name:yup.string().required(),
        tipo:yup.string().required(),
        loja:yup.string().required(),
        preco:yup.string().required(),
        estoque:yup.string().required(),
        descricao:yup.string(),
        image:yup.string().required(),
        categoria: yup.string().required(),
    }))
}))