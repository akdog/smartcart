import { createContext } from "react";
import { TProduct } from "../types/TProducts";

export const ProductContext = createContext<TProduct[] | undefined>(undefined);
