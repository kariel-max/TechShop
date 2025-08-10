import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Perfil } from "../pages/perfil";
import { Main } from "../pages/main";
import { Carrinho } from "../pages/carrinho";
import { AddProduct } from "../pages/create-product";
import { UseCartId } from "@/hooks/useCartId";
import PagamentoPage from "@/pages/pagamentoPage.pages";
import { SearchPage } from "@/pages/searchPage.page";
import { PrivateRoute } from "@/hooks/use-private-route";
import { PageProduct } from "@/pages/pagePorduct.page";
import { PedidoPage } from "@/pages/Pedido.page";

const queryClient = new QueryClient();

function app() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseCartId/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/produto" element={<PageProduct/>} />
          <Route path="/orders" element={<PedidoPage />} />

          <Route element={<PrivateRoute/>}>
            <Route path="/main" element={<Main />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/pagamento" element={<PagamentoPage />}/>
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/sucesso"
              element={
                <div className="text-center mt-10 text-2xl">
                  Pagamento realizado com sucesso!
                </div>
              }
            />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/criarProduto" element={<AddProduct />} />
        </Route>
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default app;
