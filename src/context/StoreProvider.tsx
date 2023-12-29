import { useEffect, useState } from "react";

import { ProductContext } from "./store";

import { TProduct } from "../types/TProducts";

type ChildrenType = {
  children: React.ReactNode;
  currentLocation: string;
};

const StoreProvider = ({ children, currentLocation }: ChildrenType) => {
  const [data, setData] = useState<TProduct[] | undefined>([]);
  const [fetchedByLocation, setFetchedByLocation] = useState<string>("");

  useEffect(() => {
    if (currentLocation === "/all") {
      setFetchedByLocation("?limit=5");
    }

    fetch(`https://fakestoreapi.com/products${fetchedByLocation}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [currentLocation]);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default StoreProvider;
