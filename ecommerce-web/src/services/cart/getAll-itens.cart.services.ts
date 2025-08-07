import { axiosInstance } from "@/lib/axios";
import type { item } from "@/types/carts/cartItem-responce";

export const getItensCart = async (cart_id: number): Promise<item> => {
const { data } = await axiosInstance.get<item>(`/cart/${cart_id}`);
  return data;
};
