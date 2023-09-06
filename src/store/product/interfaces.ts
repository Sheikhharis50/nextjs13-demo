import { IProduct, ICreateProduct } from "@/interfaces/product";

export interface IProductState {
  products: IProduct[];
  count: number;
}

export interface IProductContext extends IProductState {
  createProduct: (product: ICreateProduct) => void;
  deleteProduct: (id?: number) => void;
}
