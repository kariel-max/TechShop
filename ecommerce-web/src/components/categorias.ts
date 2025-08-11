import { useMutation, useQueryClient } from "@tanstack/react-query";
export function getCategorias() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch("http://localhost:3750/api/categorias");

      const result = await response.json();
      console.log(result)
      if (result.ok) {
        return result.categoria;
      } else {
        console.error(result.errors.default || "Erro ao buscar categorias");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-categorias"] });
    },
  });
};