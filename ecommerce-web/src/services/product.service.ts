import { axiosInstance } from "@/lib/axios";
import type { IProduct } from "../types/products/products";

export const getProdutos = async (): Promise<IProduct[]> => {
  const { data } = await axiosInstance.get<IProduct[]>("/products");
  return data;
};
