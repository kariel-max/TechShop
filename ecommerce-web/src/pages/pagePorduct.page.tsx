import { NavBar } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { useproduct } from "@/hooks/products/use-get-produt.product.hooks";
import { useSearchParams } from "react-router-dom";

export const PageProduct = () => {
    const [searchParams] = useSearchParams();
    const id = Number(searchParams.get("id")) || 0;

    const {data, isLoading, isError} = useproduct(id);
    if (isLoading) return (<p>Carregando...</p>)
    if (isError) return (<p>Erro ao carregar produto.</p>)
        console.log("dados do produto", data?.data.name);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      <NavBar />
      <div className="bg-gradient-to-r min-h-screen from-blue-600/20 via-purple-600/20 to-pink-600/20 px-50 pt-30">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-sm p-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="w-full h-full ">
            <img className="w-full h-full" src={data?.data.image} alt={data?.data.name} />
          </div>
          <div className="flex flex-col space-y-2 min-h-screen rounded-lg border border-gray-400 p-2">
            <p className="text-gray-500 mb-2">{data?.data.tipo} | novo</p>
            <h1 className="text-3xl font-bold mb-4">{data?.data.name}</h1>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              Preço: {data?.data.preco}
            </p>
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Adicionar ao Carrinho
            </Button>
            <Button className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
              Comprar Agora
            </Button>
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold mt-10 mb-4">Detalhes do Produto</h2>
            <p className="text-gray-700">{data?.data.descricao}</p>
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Especificações</h3>
                <ul className="list-disc pl-5 space-y-1">
                {/* {data?.data.especificacoes.map((spec, index) => (
                    <li key={index} className="text-gray-600">{spec}</li>
                ))} */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
