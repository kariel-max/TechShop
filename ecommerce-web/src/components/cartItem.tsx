import { useQueryClient } from "@tanstack/react-query";
// import { Button } from "./ui/button";
// import { Trash2Icon } from "lucide-react";
import { useItensCart } from "@/hooks/carts/use-getAll-Cart-Item";
import { useAddItemCart } from "@/hooks/carts/add-produto-cart";
import { useRemoveItemCart } from "@/hooks/carts/remove-produto.cart";
import TechShopLoader from "./techShopLoader";

export const ItemCart = () => {
  const { mutateAsync: addItemMutate } = useAddItemCart();
  const { mutateAsync: removeItemCart } = useRemoveItemCart();
  const queryClient = useQueryClient();
  const cart_id = queryClient.getQueryData<number>(["cart_id"]);
  type handleIncrementData = {
    value: "adicionar" | "remover";
    product_id: number;
    cartId: number | undefined;
  };
  async function handleIncrement({
    value,
    product_id,
    cartId,
  }: handleIncrementData) {
    {
      let quantity = 0;
      switch (value) {
        case "adicionar":
          quantity += 1;
          break;
        case "remover":
          quantity -= 1;
          break;
        default:
          console.warn("Valor inválido para incremento:", value);
          return;
      }

      await addItemMutate({
        cart_id: cartId ?? 0,
        product_id: product_id,
        quantity: quantity,
      });
    }
  }
  const { data, isLoading, isError } = useItensCart(cart_id ?? 0);
  if (!cart_id) {
    return <p>Carrinho não encontrado.</p>;
  }

  if (isLoading) {
    return <TechShopLoader/>;
  }

  if (isError || !data || !Array.isArray(data.produtos)) {
    return <p>Erro ao carregar itens do carrinho.</p>;
  }

  return (
    <div className="p-5">
      {data.produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        data.produtos.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-3 rounded mb-2 bg-white shadow"
          >
            <div className="flex">
              <img
                className="w-32 h-32 object-cover rounded-lg mr-5"
                src={item.image}
                alt={item.name}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Preço: R$ {item.preco?.toFixed(2)}</p>
                <div>
                  <p>Quantidade:</p>
                  <button
                    onClick={() =>
                      handleIncrement({
                        value: "remover",
                        product_id: item.id,
                        cartId: item.produto_carrinho?.cart_id
                      })
                    }
                    className="px-2 border"
                  >
                    -
                  </button>
                  <span className="mx-2">
                    {item.produto_carrinho?.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleIncrement({
                        value: "adicionar",
                        product_id: item.id,
                        cartId: item.produto_carrinho?.cart_id
                      })
                    }
                    className="px-2 border"
                  >
                    +
                  </button>
                </div>
                <button onClick={()=> removeItemCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Excluir
                </button>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-full">
              Comprar
            </button>
          </div>
        ))
      )}
    </div>
  );
};
