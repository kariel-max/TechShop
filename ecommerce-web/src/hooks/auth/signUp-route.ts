import { signUpService } from "@/services/auth/signUp.auth.sevice";
import type { signRequest, signResponse } from "@/types/auth/signUp.auth.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useSingUpRoute() {
     const queryClient = useQueryClient()
    return useMutation<signResponse, Error, signRequest>({
        mutationFn: signUpService,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-singUp']})
        }
    })
}