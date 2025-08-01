import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/home"
import {Login} from "./pages/login"
import { SignUp } from "./pages/signUp"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Perfil } from "./pages/perfil"
import { Main } from "./pages/main"
import { Carrinho } from "./pages/carrinho"
import { AddProduct } from "./pages/create-product"

const queryClient = new QueryClient()
function app() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/main" element={<Main/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/criarProduto" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default app
