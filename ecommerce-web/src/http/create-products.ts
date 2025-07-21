import {useMutation, useQueryClient} from "@tanstack/react-query"
import type { productRequest } from "./types/product-request";

export function createProduct() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: productRequest) => {
            console.log(data)
            const response = await fetch("http://localhost:3750/api/createProdutos", {
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
            queryClient.invalidateQueries({queryKey: ['get-product']})
        }
    })
}