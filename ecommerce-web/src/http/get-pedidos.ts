// http/get-pedidos.ts
import { useQuery } from "@tanstack/react-query";
import type { product } from "./types/products";

interface pedidos {
  id: string;
  produto?: product | null;
  carrinhoId: number
  quantidade: number;
}

export function getPedidos() {
  return useQuery<pedidos[], Error>({
    queryKey: ['get-pedidos'],
    queryFn: async () => {
      const response = await fetch("http://localhost:3750/api/pedidos");
      const result = await response.json()
      return "errors" in result ? [] : result;
    },
  });
}
