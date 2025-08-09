export type signResponse = {
    userId: number
}
export type signRequest = {
    name: string,
    email: string,
    senha: string,
    confSenha: string
}