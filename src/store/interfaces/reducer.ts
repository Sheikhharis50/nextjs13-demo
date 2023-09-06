import { IActionOptions } from "./action";

export interface IReducer<T, O> {
  (state: T, action: IActionOptions<O>): T;
}
