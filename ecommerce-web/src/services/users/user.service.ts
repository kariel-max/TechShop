import { axiosInstance } from "@/lib/axios"
import type { getUserRequest, getUserResponse } from "@/types/users/getUser.type"

export const getUserService = async ({user_id}:getUserRequest):Promise<getUserResponse>=> {
    const response = await axiosInstance.get<getUserResponse>(`/user/${user_id}`)
    return response.data
}