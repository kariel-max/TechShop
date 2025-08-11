import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { OrderCard } from "@/components/orderCard";
import { Input } from "@/components/ui/input";

export const PedidoPage = () => {
  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto p-6 space-y-4">
          {/* Título */}
          <h1 className="pt-30 text-2xl font-bold text-gray-800">Compras</h1>

          {/* Barra de filtros e pesquisa */}
          <div className="flex flex-wrap items-center gap-4">
            <form className="flex flex-wrap items-center gap-4">
              {/* Campo de busca */}
              <Input placeholder="Buscar compra..." className="w-64" />

              {/* Filtro de status */}
              <select
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Filtrar por status"
              >
                <option value="">Todos</option>
                <option value="pendente">Pendentes</option>
                <option value="concluido">Concluídos</option>
                <option value="cancelado">Cancelados</option>
              </select>
            </form>

            {/* Contador */}
            <span className=" flex text-gray-600 text-sm pr-6 items-center justify-center">| <p className="pl-4"> 11 compras</p></span>
          </div>
        </div>

        <div>
          <div className="max-w-4xl mx-auto p-6 space-y-4">
            <OrderCard
              date="6 de julho"
              status="Entregue"
              title="Você recebeu a compra"
              description="Capacete Masculino Moto Esportivo Pro Tork Stealth Conc... | Cor: Branco - vermelho, Tamanho: 56"
              storeName="Loja oficial Sportbay"
              storeVerified
              newMessages
              image="https://via.placeholder.com/150"
              onViewOrder={() => alert("Visualizando compra")}
              onBuyAgain={() => alert("Comprando novamente")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
