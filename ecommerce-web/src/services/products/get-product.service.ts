import { axiosInstance } from "@/lib/axios"
import type { IProductRequest } from "@/types/products/product-request";

export const getProduct = async (id:number)=> {
    const result = await axiosInstance.get<IProductRequest>(`/product/${id}`)
    return result;
}