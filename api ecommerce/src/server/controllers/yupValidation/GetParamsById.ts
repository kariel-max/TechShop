import { validation } from "../../shared/middleware"
import * as yup from "yup";

export const getParamsById = validation((getUser) => ({
    params: getUser(yup.object().shape({
        id: yup.number().required().integer().moreThan(0)
    }))
}))