import { axiosInstance } from "@/lib/axios"

export type resetPassWordRequest = {
    token: string,
    novaSenha: string
}

export const resetPasswordSevice = async (data: resetPassWordRequest) => {
    const responce = await axiosInstance.post("/api/resetPassword", data)
    return responce
}