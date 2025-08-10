// src/components/OrderCard.tsx
import type { FC } from "react";

interface OrderCardProps {
  date: string;
  status: string;
  title: string;
  description: string;
  storeName: string;
  storeVerified?: boolean;
  newMessages?: boolean;
  image: string;
  onViewOrder?: () => void;
  onBuyAgain?: () => void;
}

export const OrderCard: FC<OrderCardProps> = ({
  date,
  status,
  title,
  description,
  storeName,
  storeVerified,
  newMessages,
  image,
  onViewOrder,
  onBuyAgain,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Data */}
      <div className="px-4 py-2 border-b text-sm text-gray-600">{date}</div>

      {/* Conteúdo */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 gap-4">
        {/* Imagem */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
          <div>
            <p className="text-xs text-green-600 font-semibold">{status}</p>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>

        {/* Loja */}
        <div className="text-sm text-gray-600 min-w-[150px]">
          <p className="font-medium flex items-center gap-1">
            {storeName}
            {storeVerified && (
              <span className="text-blue-500">✔</span>
            )}
          </p>
          {newMessages && (
            <a href="#" className="text-blue-600 hover:underline text-xs flex items-center gap-1">
              Ver mensagens novas
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            </a>
          )}
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onViewOrder}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded"
          >
            Ver compra
          </button>
          <button
            onClick={onBuyAgain}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded"
          >
            Comprar novamente
          </button>
        </div>
      </div>
    </div>
  );
};
