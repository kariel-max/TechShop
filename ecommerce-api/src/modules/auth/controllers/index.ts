import * as signIn from "./signIn.auth.controller"
import * as signUp from "./signUp.auth.controller"

export const authController = {
    ...signIn,
    ...signUp,
}