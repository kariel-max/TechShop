import { SearchIcon, ShoppingCart, User2Icon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserCamp } from "./userCamp";

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-15 h-15 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechStore
            </span>
          </div>
          <div className="flex-1 flex mx-10 items-center">
            <Input className="h-15 placeholder:text-2xl rounded-br-none rounded-tr-none" placeholder="Buscar..."/>
            <Button className="h-15 w-15 bg-gradient-to-r from-blue-600 to-purple-600 rounded-bl-none rounded-tl-none">
            <SearchIcon className="text-white"/>
            </Button>
          </div>
          
          {showMenu ? (
            <nav className="absolute overflow-x-hidden right-0 top-0 bg-gray-200 min-h-screen w-lg transition-all duration-300">
            <ul className="space-y-4">
              <li className="text-3xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"><Link to={"#"}><UserCamp/></Link></li>
              <li className="text-3xl px-6  font-medium hover:text-gray-700"><Link to={"#"}>Categorias</Link></li>
              <li className="text-3xl px-6  font-medium hover:text-gray-700"><Link to={"#"}>Endereços</Link></li>
              <li className="text-3xl px-6  font-medium hover:text-gray-700"><Link to={"/carrinho"}>Carrinho</Link></li>
              <li className="text-3xl px-6  font-medium hover:text-gray-700"><Link to={"#"}>Pedidos</Link></li>
              <li className="text-3xl px-6  font-medium hover:text-gray-700"><Link to={"#"}>Ajuda</Link></li>
            </ul>
            <div className="mt-10 w-full flex justify-center">
                <Button onClick={()=> {setShowMenu(false)}} className="mt-2 rounded-md bg-indigo-600 px-10 py-6 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Fechar
                </Button>
            </div>
          </nav>
          ):(<div onClick={()=> {setShowMenu(true)}} className="w-15 h-15 p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <User2Icon className="h-15 w-15 text-white"/>
          </div>)}
          
        </div>
      </header>
    </div>
  );
};
