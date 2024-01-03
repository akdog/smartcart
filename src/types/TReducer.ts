export enum ACTIONS {
  SET_DATA,
  SET_ADDED_CART,
  SET_CART_ID,
}

export type ReducerAction = {
  type: ACTIONS;
  payload: any;
};
