import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Shield, Truck } from "lucide-react";
import {ProductCard} from "@/components/ProductCard";

 export const Home = () => {
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
    }
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Entrega Rápida",
      description: "Frete grátis acima de R$ 299"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compra Segura",
      description: "Pagamento 100% protegido"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ofertas Relâmpago",
      description: "Descontos de até 50%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechStore
            </span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    COMPRE
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ONLINE
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                  Os melhores produtos de tecnologia ao seu alcance com preços imbatíveis
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  COMPRAR AGORA
                  <ShoppingCart className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Ver Catálogo
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
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

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50K+</p>
              <p className="text-gray-600">Produtos</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100K+</p>
              <p className="text-gray-600">Clientes Felizes</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99%</p>
              <p className="text-gray-600">Satisfação</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</p>
              <p className="text-gray-600">Suporte</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};