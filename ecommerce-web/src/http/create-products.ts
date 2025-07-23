import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { productRequest } from "./types/product-request";

export function createProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: productRequest) => {
      const response = await fetch("http://localhost:3750/api/createProduto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const  result = await response.json()
      if (!result) {
        throw new Error("Erro ao criar produto");
      }

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-product"] });
    },
  });
}
