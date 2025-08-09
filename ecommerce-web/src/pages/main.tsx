import { NavBar } from "@/components/navBar";
import { ProductCard } from "@/components/ProductCard";
import { useAllProducts } from "@/hooks/products/use-get-all-products";

export const Main = () => {
   const allProduct = useAllProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <NavBar />

      <section className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 mt-20">
        <div className="max-w-7xl min-h-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Produtos em Destaque
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in">
            {allProduct.data?.map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
