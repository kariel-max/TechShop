import { User } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const UserCamp = () => {
  return (
    <div className="w-full flex flex-col items-center border-b-2 border-gray-900 py-6">
      <div className="border-indigo-600 border-8 rounded-full p-8">
        <User className="text-indigo-600" size={150} strokeWidth={3} />
      </div>
      <div className="text-2xl font-bold mt-2 text-center">joão</div>
      <Link to={'/perfil'}>
      <Button 
       className="mt-2 rounded-md bg-indigo-600 px-3 py-6 text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        EDITAR PERFIL
      </Button>
      </Link>
      
    </div>
  );
};
