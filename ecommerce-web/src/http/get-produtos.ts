import { useQuery } from "@tanstack/react-query";

interface product {
  id: number;
  name: string;
  preco: string;
  precoOriginal: string;
  image: string;
  rating: number;
  discount: string;
}
export const AllProducts = () => {
  return useQuery<product[], Error>({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3750/api/produtos`);
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const products = await response.json();
      return products;
    },
  });
};
