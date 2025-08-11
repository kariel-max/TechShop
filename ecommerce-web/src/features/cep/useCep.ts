import { useQuery } from "@tanstack/react-query";

export const useInputCep = (cep: string) => {
  const cepLimpo = cep.replace(/\D/g, ""); // remove caracteres não numéricos
  return useQuery({
      queryKey: ["cep", cepLimpo],
      queryFn: async () => {
          const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
          const data = await response.json()
      return data
    },
    enabled: !!cepLimpo && cepLimpo.length === 8, // só busca se o CEP for válido
  });
};