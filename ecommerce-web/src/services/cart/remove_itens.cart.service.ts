import { axiosInstance } from "@/lib/axios";

export const removeItensCart = async (product_id: number): Promise<void> => {if (!product_id || isNaN(Number(product_id))) {
    console.error("ID do produto inválido:", product_id);
    throw new Error("ID do produto inválido");
  }

    console.log("id produto remove", product_id)
await axiosInstance.delete<number>(`/cart/item/${product_id}`);
};
