import { axiosInstance } from "@/lib/axios"
import type { signRequest, signResponse } from "@/types/auth/signUp.auth.type"

export const signUpService = async (data: signRequest) => {
    const result = await axiosInstance.post<signResponse>("/login", data)
    return result.data
}