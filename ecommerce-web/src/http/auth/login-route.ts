import { useMutation, useQueryClient} from "@tanstack/react-query"
import type { loginRequest } from "../../types/auth/login-request";
export function loginRoute() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: loginRequest) => {
            const response = await fetch("http://localhost:3750/api/signIn", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json()
            return result
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-login']})
        }
    })
}