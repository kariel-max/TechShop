import { getUserService } from "@/services/users/user.service"
import type { getUserRequest } from "@/types/users/getUser.type"
import { useQuery } from "@tanstack/react-query"

export const getUser = (user_id:getUserRequest)=> {
    return useQuery({
        queryKey: ["user"],
        queryFn: ()=> getUserService(user_id),
        refetchOnMount: true,
        enabled: !!user_id
    })
}