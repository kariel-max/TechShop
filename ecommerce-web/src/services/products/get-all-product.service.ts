import { axiosInstance } from "@/lib/axios";
import type { IProduct } from "../../types/products/products";

export const getAllProdutosService = async (): Promise<IProduct[]> => {
  const { data } = await axiosInstance.get<IProduct[]>("/products");
  return data;
};
