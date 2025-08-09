import { useMutation, useQueryClient} from "@tanstack/react-query"
import { loginService } from "@/services/auth/login.auth.service";
import type { loginRequest, loginResponse } from "@/types/auth/login.auth.type";
export function loginRoute() {
    const queryClient = useQueryClient()
    return useMutation<loginResponse, Error, loginRequest>({
        mutationFn: loginService,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-login']})
        }
    })
}