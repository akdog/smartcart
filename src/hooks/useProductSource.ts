import { useEffect, useReducer } from "react";
import { TProduct } from "../types/TProducts";
import { ReducerAction, ACTIONS } from "../types/TReducer";

const initalState: {
  data: TProduct[] | undefined;
  added_cart: boolean;
  cart_id: number;
} = {
  data: undefined,
  added_cart: false,
  cart_id: 0,
};

export function useProductSource() {
  const [state, dispatch] = useReducer(reducer, initalState);

  function reducer(
    state: typeof initalState,
    action: ReducerAction
  ): typeof initalState {
    switch (action.type) {
      case ACTIONS.SET_DATA:
        return { ...state, data: [...action.payload] };
      case ACTIONS.SET_ADDED_CART:
        return { ...state, added_cart: action.payload };
      case ACTIONS.SET_CART_ID:
        return { ...state, cart_id: action.payload };
      default:
        return state;
    }
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: ACTIONS.SET_DATA, payload: json }));
  }, []);

  return { state, dispatch };
}
