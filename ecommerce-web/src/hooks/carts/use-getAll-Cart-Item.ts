import { getItensCart } from "@/services/cart/getAll-itens.cart.services";
import { useQuery } from "@tanstack/react-query";

export const useItensCart = (cart_id: number) => {
  return useQuery({
    queryKey: ["cart", cart_id],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return getItensCart(Number(id));
    },
    refetchOnMount: true,
    enabled: !!cart_id, // só executa se cart_id for válido
  });
};
