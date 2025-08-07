import { useSearchParams } from "react-router-dom";
import { NavBar } from "@/components/navBar";
import { useProducts } from "@/hooks/use-products";

export function SearchPage() {
  const allProduct = useProducts()
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const filtered = allProduct.data?.filter((product) =>
    product.name.toLowerCase().includes(query?.toLowerCase() || "")
  );
console.log("produtos filtrados", filtered);
  if (allProduct.isLoading) return <p className="text-center  mt-30">Carregando...</p>;
  if (allProduct.isError)
    return <p className="text-center  mt-30 text-red-500">Erro ao buscar produtos.</p>;

  return (
    <div>
      <NavBar />
     <div className="px-10 w-screen grid grid-cols-[1fr_3fr] gap-4">
        
        <div className="w-full h-full mt-30 bg-amber-300"></div>
        <div className="mt-30 w-full">
          <h1 className="text-2xl font-bold mb-4">
          Resultados para: {query}
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {filtered?.length === 0 ? (
          <p className="col-span-full text-center">Nenhum produto encontrado.</p>
        ) : (
          filtered?.map((item) => (
            <div key={item.id} className="border flex p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-50 h-50 object-cover rounded-2xl mb-2" />
              <div className="ml-4 flex flex-col">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.preco}</p>
              <p className="text-green-600 font-bold">R$ {item.preco}</p>
              </div>
            </div>
          ))
        )}
        </div>
        </div>
      </div>
    </div>
  );
}
