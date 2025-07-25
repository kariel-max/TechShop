import { PedidosCart } from "@/components/pedidosCard";
import { ProductCard } from "@/components/ProductCard";
import { createCarrinho } from "@/http/create-carrinho";
import { getPedidos } from "@/http/get-pedidos";
import { AllProducts } from "@/http/get-produtos";

export const Carrinho = () => {
  const allProduct = AllProducts();
  const { mutateAsync: carrinhoMutate } = createCarrinho();
 const { data:pedido, isLoading:pedidoLoading, error:pedidoError } = getPedidos();

  const userId = Number(localStorage.getItem("userId"))
  if (userId) {
   carrinhoMutate({userId});
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden ">
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 px-30">
        <div className="">
          <h1 className="text-5xl font-bold pt-10 p-5">Carrinho</h1>
           {pedidoLoading ? (
            <p className="p-5">Carregando pedidos...</p>
          ) :pedidoError ? (
            <p className="p-5">Erro ao carregar pedidos.</p>
          ) :pedido ? (
            <PedidosCart pedidos={pedido} />
          ) : (
            <p>
              Não há produtos no seu carrinho
            </p>
          )}
        </div>
        <div className="w-full py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Produtos de seu enterese
          </h2>
          <div className="flex flex-wrap animate-fade-in space-x-6 space-y-6">
            {allProduct.isLoading ? (
              <p>Carregando produtos...</p>
            ): allProduct.data?.length === 0 ? (
              <p>Nenhum produto encontrado!</p>
            ): allProduct.isError ? (
              <p>Erro ao carregar produtos.</p>
            ) : (
              allProduct.data?.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  delay={index * 100}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
