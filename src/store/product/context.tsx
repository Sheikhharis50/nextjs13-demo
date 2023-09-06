import React, { createContext } from "react";
import { productReducer } from "./reducer";
import { productState } from "./state";
import { IProductContext } from "./interfaces";
import * as actions from "./actions";
import { IProduct } from "@/interfaces/product";

interface Props {
  children: React.ReactElement;
}

export const ProductContext = createContext<IProductContext | null>(null);

export default function ProductProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(productReducer, productState);

  const createProduct = (product: IProduct) => {
    dispatch({
      type: actions.ADD_PRODUCT,
      payload: product,
    });
  };

  const deleteProduct = (id?: number) => {
    dispatch({
      type: actions.DELETE_PRODUCT,
      payload: { id },
    });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        createProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
