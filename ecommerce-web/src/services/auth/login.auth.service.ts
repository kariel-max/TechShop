import { axiosInstance } from "@/lib/axios";
import type { loginRequest, loginResponse } from "@/types/auth/login.auth.type";

export const loginService = async (data: loginRequest)=> {
    const result = await axiosInstance.post<loginResponse>("/signIn", data)
    return result.data;
}