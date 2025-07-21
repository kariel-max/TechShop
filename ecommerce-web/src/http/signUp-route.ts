import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { signRequest } from "./types/signUp-resquest";
import type { signResponse } from "./types/signUp-response";
export function useSingUpRoute() {
     const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: signRequest) => {
            const response = await fetch("http://localhost:3750/api/signUp", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result: signResponse = await response.json()
            return result
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-singUp']})
        }
    })
}