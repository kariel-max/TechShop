import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItensCart } from "@/services/cart/add-itens.cart.services";
import type { IAddProdutoRequest } from "@/types/carts/add-produto";
import type { item } from "@/types/carts/cartItem-responce";

export const useAddItemCart = () => {
  const queryClient = useQueryClient();

  return useMutation<item, Error, IAddProdutoRequest>({
    mutationFn: addItensCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
