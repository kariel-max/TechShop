import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { IProduct } from "@/types/products/products";
import { ButtonCartAdd } from "./buttonCartAdd";

interface ProductCardProps {
  product: IProduct;
  delay?: number;
}

export const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  return (
    <Card 
      className="group py-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          {product.discount}%
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{product.name}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-gray-600">{product.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {product.preco}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {product.precoOriginal}
            </span>
          </div>
          <ButtonCartAdd product_id={product.id} />
        </div>
      </CardContent>
    </Card>
  );
};