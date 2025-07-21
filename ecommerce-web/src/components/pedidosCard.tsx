import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import produto from "../image/produto4.png"

export const PedidosCart = () => {
  return (
    <Card className="p-0 flex flex-row">
      <div className="p-2">
        <img className="w-40 rounded-2xl" src={produto} alt="produto" />
      </div>
      <CardContent className="flex justify-between items-center w-full">
        <div className="space-y-5">
          <h2 className="text-4xl">nome do produto</h2>
          <Button className="bg-red-500 text-lg hover:bg-red-600">
            Excluir
          </Button>
          <div>
            <Button className="bg-white border-2 text-gray-900 text-lg hover:bg-amber-50">
              -
            </Button>
            <span className="text-lg px-2">1</span>
            <Button className="bg-white border-2 text-gray-900 text-lg hover:bg-amber-50">
              +
            </Button>
          </div>
        </div>
        <div className="text-2xl font-medium">R$: 100</div>
      </CardContent>
    </Card>
  );
};
