import { ProductContext } from "./store";
import { useProductSource } from "../hooks/useProductSource";

type ChildrenType = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: ChildrenType) => {
  const state = useProductSource();

  return (
    <ProductContext.Provider value={state.state.data}>
      {children}
    </ProductContext.Provider>
  );
};

export default StoreProvider;
