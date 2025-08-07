import type { IProduct } from "../products/products";

export type item = {
  id: number;
  carrinhoId: number
  quantity: number;
  produtos?: IProduct | null;
};

export interface IItemsCartProps {
  itens: item[];
}