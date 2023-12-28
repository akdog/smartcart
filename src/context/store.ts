import { createContext } from "react";
import { Product } from "../types/TProducts";

export const ProductContext = createContext<Product[] | undefined>(undefined);
