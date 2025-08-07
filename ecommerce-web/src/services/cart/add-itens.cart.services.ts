import { axiosInstance } from "@/lib/axios";
import type { IAddProdutoRequest } from "@/types/carts/add-produto";
import type { item } from "@/types/carts/cartItem-responce";

export const addItensCart = async (
  data: IAddProdutoRequest
): Promise<item> => {
  const result = await axiosInstance.post<item>(
    "/cart/items",
    data
  );

  return result.data;
};