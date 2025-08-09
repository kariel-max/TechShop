import * as signIn from "./signIn.auth.controller"
import * as signUp from "./signUp.auth.controller"
import * as verify from "./verify.auth.controller"

export const authController = {
    ...signIn,
    ...signUp,
    ...verify,
}