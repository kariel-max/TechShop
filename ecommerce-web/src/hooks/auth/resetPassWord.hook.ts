import { resetPasswordSevice } from "@/services/auth/resetPassWord.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const resetPasswordHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: resetPasswordSevice,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['reset-password']})
        }
    })
}