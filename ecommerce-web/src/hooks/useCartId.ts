import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function UseCartId() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const savedCartId = localStorage.getItem("cart_id");
    const carrinhoId = savedCartId && !isNaN(Number(savedCartId)) ? Number(savedCartId) : null;
    if (carrinhoId !== null) {
      queryClient.setQueryData(["cart_id"], carrinhoId);
      console.log("Carrinho ID setado:", carrinhoId); // Aqui você verá um número
    } else {
      console.log("Nenhum carrinho válido encontrado no localStorage.");
    }
  }, [queryClient]);

  return null;
}