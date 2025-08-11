import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProfileOption {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  status?: "ok" | "alert";
}

export const Perfil = ()=> {
  const navigate = useNavigate();

  const options: ProfileOption[] = [
    {
      title: "Informações pessoais",
      description:
        "Informações do seu documento de identidade e sua atividade econômica.",
      status: "ok",
    },
    {
      title: "Dados da sua conta",
      description:
        "Dados que representam a conta no Mercado Livre e Mercado Pago.",
      status: "alert",
    },
    {
      title: "Cartões",
      description: "Cartões salvos na sua conta.",
    },
    {
      title: "Endereços",
      description: "Endereços salvos na sua conta.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 min-h-screen">
        <NavBar/>
      {/* Cabeçalho */}
      <div className="p-6 container mx-auto">
      <div className="bg-white p-6 rounded-lg shadow mb-6 flex items-center gap-4">
        <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
          KS
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Kariel Emanuel Silva Martins
          </h1>
          <p className="text-gray-500">kar***s@gmail.com</p>
        </div>
      </div>

      {/* Grid de opções */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((opt, idx) => (
          <Card
            key={idx}
            onClick={() => opt.href && navigate(opt.href)}
            className="cursor-pointer hover:shadow-lg transition"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{opt.title}</h2>
                {opt.status === "ok" && (
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                )}
                {opt.status === "alert" && (
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {opt.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rodapé */}
      <p className="mt-6 text-sm text-gray-500">
        Você pode{" "}
        <button className="text-blue-500 underline">
          cancelar sua conta
        </button>{" "}
        quando quiser.
      </p>
      </div>
      <Footer/>
    </div>
    )
};