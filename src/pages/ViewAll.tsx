//Import Components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Menu from "../components/Menu";

//Import Types
import { TProduct } from "../types/TProducts";

type Props = {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedToWishlist: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addedToWishlist: TProduct[];
};

const ViewAll = ({
  isActiveMenu,
  setIsActiveMenu,
  isActiveCart,
  setIsActiveCart,
  addedToWishlist,
  setAddedToWishlist,
}: Props) => {
  return (
    <div>
      <Header isActiveCart={isActiveCart} setIsActiveCart={setIsActiveCart} />
      <Products
        setAddedToWishlist={setAddedToWishlist}
        addedToWishlist={addedToWishlist}
      />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? (
        <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewAll;
