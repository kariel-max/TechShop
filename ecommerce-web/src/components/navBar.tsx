import { SearchIcon, ShoppingCart, User2Icon, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserCamp } from "./userCamp";
import { useQueryClient } from "@tanstack/react-query";
import { useItensCart } from "@/hooks/carts/use-getAll-Cart-Item";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { SelectField } from "./form/selectField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type SearchFormData = {
  search: string;
};

const categoriaSchema = z.object({
  categoria: z.string().min(1, "Selecione uma categoria"),
})

export const NavBar = () => {
  const navigate = useNavigate();
    const queryClient = useQueryClient();
    const cart_id = queryClient.getQueryData<number>(["cart_id"]);
    const [showMenu, setShowMenu] = useState(false);
    const {data, isError} = useItensCart(cart_id ?? 0);
    const { register, handleSubmit } = useForm<SearchFormData>();
    const addProduct = useForm({
      resolver: zodResolver(categoriaSchema),
        defaultValues: {
          categoria: "",
        },
      });
    

    let totalItens = 0;

  if (isError || !data || !Array.isArray(data.produtos)) {
    totalItens = 0;
  } else {
    totalItens = data?.produtos.length;
  }

  const categorias = [
  { label: "Eletrônicos", value: "eletronicos" },
  { label: "Informática", value: "informatica" },
  { label: "Acessórios", value: "acessorios" },
  { label: "Moda", value: "moda" },
  { label: "Livros", value: "livros" },
];

const onSearch = (dataSearch: SearchFormData) => {
  const query = dataSearch.search;
  // Redirecionar ou filtrar produtos com base no termo
  console.log("Buscando por:", query);
  navigate(`/search?query=${dataSearch.search}`);
};

async function handleFilter({ categoria }: { categoria: string }) {
  if (categoria) {
    const url = `/produtos?categoria=${categoria}`;
    window.location.href = url;
  } else {  
    window.location.href = "/produtos";
  }
}
  return (
    <div>
    <header className="bg-white/70 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TechStore
          </span>
        </Link>

        {/* Busca */}
        <div className="flex-1 max-w-md items-center">
          <form onSubmit={handleSubmit(onSearch)} className="flex">
  <Input
    type="text" className="rounded-r-none"
    placeholder="Buscar produto..."
    {...register("search")}
  />
  <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600">
            <SearchIcon className="text-white w-5 h-5" />
          </Button>
</form>
         
        </div>

        {/* Ações do usuário */}

        <div className="flex items-center space-x-4">

        {/* icone do carrinho */}

         <Link
      to="/carrinho"
      className="relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg"
    >
      {/* Ícone do carrinho */}
      <ShoppingCart className="w-5 h-5 text-white" />

      {/* Badge com a quantidade */}
      {totalItens > 0 && (
        <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-500 text-white rounded-full px-1.5 py-0.5 shadow-md">
          {totalItens}
        </span>
      )}
    </Link>
       
          <button
            onClick={() => setShowMenu(prev => !prev)}
           className="relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg"
          >
            <User2Icon className="w-6 h-6 text-white" />
          </button>
      </div>
      </div>
    </header>
     {/* Menu lateral */}
          <div className={`fixed right-0 h-screen w-lg bg-white/70 backdrop-blur-lg shadow-xl z-50 transform transition-transform duration-300 ${
    showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="p-6 space-y-4 text-gray-800 text-lg overflow-y-scroll h-9/10 ">
              <li><X onClick={() => setShowMenu(prev => !prev)} className="w-8 h-8"/></li>
              <li><UserCamp /></li>
              <Form {...addProduct}>
                <form onSubmit={addProduct.handleSubmit(handleFilter)} className="space-y-4">
                  <SelectField
                    name="categoria"
                    control={addProduct.control}
                    label="Filter por Categoria"
                    options={categorias}
                  />
                </form>
              </Form>

              <li className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"><Link to="#" className="text-lg font-medium">Endereços</Link></li>
              <li className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"><Link to="#" className="text-lg font-medium">Pedidos</Link></li>
              <li className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"><Link to="#" className="text-lg font-medium">Ajuda</Link></li>
            </ul>
          </div>
</div>
  );
};
