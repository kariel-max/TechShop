import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { carrinhoRequest } from "./types/carrinho-request";
export function createCarrinho() {
    const queryClient = useQueryClient()
    return useMutation({
       mutationFn: async (userId: carrinhoRequest) => {
        const response = await fetch(`http://localhost:3750/api/${userId}/carrinho`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
       const  result = await response.json()
      if (!result) {
        throw new Error("Erro ao criar carrinho");
      }
      localStorage.setItem("carrinhoId", result.id)
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-carrinho"] });
    },
    })
    
}