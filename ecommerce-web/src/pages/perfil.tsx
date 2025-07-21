import { UserCamp } from "@/components/userCamp"
import { Trash2Icon} from "lucide-react"
import { Link } from "react-router-dom"

export const Perfil = ()=> {
    return(
        <div className="bg-amber-50 flex flex-col justify-center overflow-x-hidden">
            <UserCamp/>
            <aside>
                <nav>
                
                <ul className="mt-5 px-6">
                    <li className="border-b-2 border-gray-900 pb-3"><Link to={"#"} className="text-2xl text-indigo-950 font-bold">Endereços</Link></li>
                    <li className="border-b-2 border-gray-900 pb-3"><Link to={"#"} className="text-2xl text-indigo-950 font-bold">Pedidos</Link></li>
                    <li className="border-b-2 border-gray-900 pb-3"><Link to={"#"} className="text-2xl text-indigo-950 font-bold">Sair</Link></li>
                    <li className="border-b-2 border-red-600 pb-3"><Link to={"#"} className="text-red-600 font-bold"><Trash2Icon size={35}/></Link></li>
                  
                </ul>
                </nav>
            </aside>
            
    </div>
    )
}