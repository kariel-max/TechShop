import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { addProdutoRequest } from "./types/add-produto";

export function addProdutoPedido() {
    const queryClient = useQueryClient()
    return useMutation({
       mutationFn: async ({carrinhoId, produtoId, quantidade}: addProdutoRequest) => {
        const response = await fetch(`http://localhost:3750/api/${carrinhoId}/pedidos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({produtoId, quantidade})
      });
       const  result = await response.json()

      if (!result) {
        throw new Error("Erro ao criar carrinho");
      }

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-carrinho"] });
    },
    })
    
}