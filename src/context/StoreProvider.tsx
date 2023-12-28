import { useEffect, useState } from "react";

import { ProductContext } from "./store";

import { TProduct } from "../types/TProducts";

type ChildrenType = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: ChildrenType) => {
  const [data, setData] = useState<TProduct[] | undefined>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default StoreProvider;
