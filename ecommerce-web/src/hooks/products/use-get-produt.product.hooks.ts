import { getProduct } from "@/services/products/get-product.service"

import { useQuery } from "@tanstack/react-query"

export const useproduct = (id: number) => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: ()=> getProduct(id), 
        refetchOnMount: true,
        enabled: !!id,
    })
}