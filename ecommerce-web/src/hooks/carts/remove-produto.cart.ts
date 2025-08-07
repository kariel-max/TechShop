import { removeItensCart } from "@/services/cart/remove_itens.cart.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveItemCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeItensCart,
    onSuccess: () => {
      // Revalida os dados do carrinho
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error("Erro ao remover item do carrinho:", error);
    }
  });
};