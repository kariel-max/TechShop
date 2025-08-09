import { axiosInstance } from "@/lib/axios";
import type { carrinhoRequest } from "@/types/carts/carrinho-request";
import type { cart_id } from "@/types/carts/cart_id.cart.service";


export const createCartService = async (data:carrinhoRequest):Promise<cart_id>=> {
  const result = await axiosInstance.post<cart_id>(
    "/carts",
    data
  );

  return result.data;
};