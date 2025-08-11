import { ButtonCartAdd } from "@/components/buttonCartAdd";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import TechShopLoader from "@/components/techShopLoader";
import { Button } from "@/components/ui/button";
import { useproduct } from "@/hooks/products/use-get-produt.product.hooks";
import { useSearchParams } from "react-router-dom";

export const PageProduct = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id")) || 0;

  const { data, isLoading, isError } = useproduct(id);
  if (isLoading) return <TechShopLoader/>;
  if (isError || !data?.data) return <p>Erro ao carregar produto.</p>;
  const produto = data?.data;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      <NavBar/>
      <div className="bg-gradient-to-r min-h-screen from-blue-600/20 via-purple-600/20 to-pink-600/20 px-50 pt-30">
        <div>
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-sm p-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="w-full h-full ">
              <img
                className="w-full h-full"
                src={produto.image}
                alt={produto.name || "Produto sem nome"}
              />
            </div>
            <div className="flex flex-col space-y-2 min-h-screen rounded-lg border border-gray-400 p-2">
              <p className="text-gray-500 mb-2">{produto.tipo} | novo</p>
              <h1 className="text-3xl font-bold mb-4">{produto.name}</h1>
              <p className="text-xl font-semibold text-blue-600 mb-4">
                Preço: {produto.preco}
              </p>
              <ButtonCartAdd product_id={id} />
              <Button className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Descrição do Produto</h2>
            <p className="text-gray-700">{produto.descricao}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
