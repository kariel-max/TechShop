import { createCartService } from "@/services/cart/create-carrinho.cart.service";
import type { cart_id } from "@/types/carts/cart_id.cart.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function createCarrinho() {
    const queryClient = useQueryClient()
    return useMutation<cart_id, Error, { user_id: number }>({
       mutationFn: createCartService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["create-carrinho"] });
    },
    })
    
}