import { useQuery } from "@tanstack/react-query";
import type { product } from "./types/products";

export const AllProducts = () => {
  return useQuery<product[], Error>({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3750/api/produtos`);
      const result = await response.json();
      return "errors" in result ? [] : result;
    },
  });
};