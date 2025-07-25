import { NavBar } from "@/components/navBar";
// import { ProductCard } from "@/components/ProductCard";
// import { Products } from "@/db/seed";

export const Main = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden ">
      <NavBar />
       <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 px-30">
        <div className="w-full py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Produtos do Dia
          </h2>
            <div className="flex flex-wrap animate-fade-in space-x-6 space-y-6">
              {/* {Products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  delay={index * 100}
                />
              ))} */}
            </div>
        </div>
      </div>
    </div>
  );
};
