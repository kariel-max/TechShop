import type { product } from "@/http/types/products";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

 type Pedido = {
  id: string;
  produto?: product | null;
  carrinhoId: number
  quantidade: number;
};

interface PedidosCartProps {
  pedidos: Pedido[];
}
export const PedidosCart = ({ pedidos }: PedidosCartProps) => {
  console.log("seus pedidos",pedidos)
  return (
     <div className="p-5 ">
      {pedidos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="flex items-center justify-between border p-3 rounded mb-2 bg-white shadow">
            <div className="flex">
            <img className="w-50 rounded-lg mr-5" src={pedido.produto?.image} alt="imagem de produto" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{pedido.produto?.name}</h3>
              <p>Preço: R$ {pedido.produto?.preco.toFixed(2)}</p>
              <div>
                <p>Quantidade:</p>
                <Button className="w-5 h-6 bg-white text-black text-lg border-2 border-zinc-800 hover:bg-zinc-500">-</Button>
                  <span className="mx-2">{pedido.quantidade}</span>
                <Button className="w-5 h-6 bg-white text-black text-lg border-2 border-zinc-800 hover:bg-zinc-500">+</Button>
                </div>
                <Button className="bg-red-500 hover:bg-red-700"><Trash2Icon/> Excluir</Button>
            </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-full">Comprar</Button>
           
          </div>
        ))
      )}
    </div>
  );
};  