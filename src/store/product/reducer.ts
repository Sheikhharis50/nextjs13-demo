import * as actions from "./actions";
import { IProductState } from "./interfaces";
import { IReducer } from "../interfaces/reducer";
import { IProduct } from "@/interfaces/product";

export const productReducer: IReducer<IProductState, IProduct> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_PRODUCT: {
      const id = state.products.length ? (state.products[0]?.id || 1) + 1 : 1;
      const products = [{ ...payload, id }, ...state.products];
      return {
        ...state,
        products,
        count: products.length,
      };
    }

    case actions.DELETE_PRODUCT: {
      const products = state.products.filter(
        (product) => product.id !== payload.id
      );
      return {
        ...state,
        products,
        count: products.length,
      };
    }

    default: {
      throw Error(`Invalid action '${type}' is fired.`);
    }
  }
};
