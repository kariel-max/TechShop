import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useAddItemCart } from "@/hooks/carts/add-produto-cart";

interface ButtonCartAddProps {
  product_id: number;
}

export const ButtonCartAdd = ({product_id}: ButtonCartAddProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync: addItemMutate } = useAddItemCart();
  const cart_id = queryClient.getQueryData<number>(["cart_id"]);
  console.log("ID do carrinho:", cart_id);
  async function handleAddCarrinho() {
    if (!cart_id || !product_id) {
      console.warn("Carrinho ou produto não encontrado.");
      return;
    }
    console.log("ID do carrinho:", cart_id);
    console.log("ID do produto:", product_id);

    await addItemMutate({
      cart_id: cart_id,
      product_id: product_id,
      quantity: 1,
    });
  }
  return (
    <Button
      onClick={handleAddCarrinho}
      size="sm"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:shadow-lg"
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      Adicionar ao carrinho
    </Button>
  );
};
