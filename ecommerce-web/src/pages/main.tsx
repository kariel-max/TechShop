import { NavBar } from "@/components/navBar";
import { ProductCard } from "@/components/ProductCard";

export const Main = () => {
  const products = [
    {
      id: 1,
      name: "MacBook Pro M3",
      preco: "R$ 12.999",
      precoOriginal: "R$ 14.999",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      rating: 4.9,
      discount: "13% OFF"
    },
    {
      id: 2,
      name: "Headphone Premium",
      preco: "R$ 899",
      precoOriginal: "R$ 1.299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 4.8,
      discount: "31% OFF"
    },
    {
      id: 3,
      name: "Tênis Esportivo",
      preco: "R$ 299",
      precoOriginal: "R$ 449",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: 4.7,
      discount: "33% OFF"
    },
    {
      id: 4,
      name: "Garrafa Térmica",
      preco: "R$ 89",
      precoOriginal: "R$ 129",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
      rating: 4.6,
      discount: "31% OFF"
    },
     {
      id: 5,
      name: "MacBook Pro M3",
      preco: "R$ 12.999",
      precoOriginal: "R$ 14.999",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      rating: 4.9,
      discount: "13% OFF"
    },
    {
      id: 6,
      name: "Headphone Premium",
      preco: "R$ 899",
      precoOriginal: "R$ 1.299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 4.8,
      discount: "31% OFF"
    },
    {
      id: 7,
      name: "Tênis Esportivo",
      preco: "R$ 299",
      precoOriginal: "R$ 449",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: 4.7,
      discount: "33% OFF"
    },
    {
      id: 8,
      name: "Garrafa Térmica",
      preco: "R$ 89",
      precoOriginal: "R$ 129",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
      rating: 4.6,
      discount: "31% OFF"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden ">
      <NavBar />
       <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 px-30">
        <div className="w-full py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Produtos do Dia
          </h2>
            <div className="flex flex-wrap animate-fade-in space-x-6 space-y-6">
              {products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  delay={index * 100}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};
