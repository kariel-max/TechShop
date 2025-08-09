import { getAllProdutosService } from "@/services/products/get-all-product.service";
import { useQuery } from "@tanstack/react-query";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["produtos"],
    queryFn: getAllProdutosService,
  });
};
