import { useMutation, useQueryClient } from "@tanstack/react-query";
interface pedidosData {
  carrinhoId: number,
  produtoId: number,
  quantidade: number
}
export function usePedidos() {
    const queryClient = useQueryClient()
    return useMutation({
       mutationFn: async (data: pedidosData) => {
        const response = await fetch(`http://localhost:3750/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
       const  result = await response.json()
      console.log(result)
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-carrinho"] });
    },
    })
    
}