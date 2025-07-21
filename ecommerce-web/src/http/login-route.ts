import {useMutation, useQueryClient} from "@tanstack/react-query"
import type { loginRequest } from "./types/login-request";
import type { loginResponse } from "./types/login-response";
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
            const result: loginResponse = await response.json()
            return result
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-login']})
        }
    })
}