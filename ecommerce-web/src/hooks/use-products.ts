import { useQuery } from "@tanstack/react-query";
import { getProdutos } from "../services/product.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["produtos"],
    queryFn: getProdutos,
  });
};
