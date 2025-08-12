import {
  SearchIcon,
  ShoppingBag,
  ShoppingCart,
  User2Icon,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useItensCart } from "@/hooks/carts/use-getAll-Cart-Item";
import { useForm } from "react-hook-form";
import { CepInput } from "@/features/cep/CepInput";

type SearchFormData = {
  search: string;
};

export const NavBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const cart_id = queryClient.getQueryData<number>(["cart_id"]);
  const { data, isError } = useItensCart(cart_id ?? 0);
  const { register, handleSubmit } = useForm<SearchFormData>();
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
    console.log("Buscando por:", query);
    navigate(`/search?query=${dataSearch.search}`);
  };
  return (
    <div>
      <header className="bg-white/70 backdrop-blur-lg w-full top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/main" className="flex items-center space-x-3">
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
                type="text"
                className="rounded-r-none"
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
            {/* {compras} */}

            <Link
              to="/carrinho"
              className="relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg"
            >
              <ShoppingBag className="w-5 h-5 text-white" />

              {/* Badge com a quantidade */}
              {totalItens > 0 && (
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-500 text-white rounded-full px-1.5 py-0.5 shadow-md">
                  {totalItens}
                </span>
              )}
            </Link>

            {/* icone do carrinho */}

            <Link
              to="/carrinho"
              className="relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 text-white" />

              {/* Badge com a quantidade */}
              {totalItens > 0 && (
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-red-500 text-white rounded-full px-1.5 py-0.5 shadow-md">
                  {totalItens}
                </span>
              )}
            </Link>

            <Link
              to="/perfil"
              className="relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg"
            >
              <User2Icon className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center px-10 bg-white/70 backdrop-blur-lg w-full border-b border-gray-200 shadow-sm">
          <nav>
            <ul className="flex space-x-4 p-4">
              {categorias.map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={`/search?query=${cat.value}`}
                    className="cursor-pointer hover:text-purple-600 transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
            <CepInput/>
        </div>
      </header>
    </div>
  );
};
