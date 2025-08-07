import type { carrinhoRequest } from "../../types/carts/carrinho-request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function createCarrinho() {
    const queryClient = useQueryClient()
    return useMutation({
       mutationFn: async (data: carrinhoRequest) => {
         const response = await fetch("http://localhost:3750/api/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
       const  result = await response.json()
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["create-carrinho"] });
    },
    })
    
}