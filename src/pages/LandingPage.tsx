import { useContext } from "react";
import { ProductContext } from "../context/store";

//Import Components
import Header from "../components/Header";
import AllCategories from "../components/AllCategories";
import SalesOffers from "../components/SalesOffers";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import styled from "styled-components";
import CartMenu from "../components/CartMenu";
import { TProduct } from "../types/TProducts";

type Props = {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  addedToCart: TProduct[];
};

const LandingPage = ({
  isActiveMenu,
  setIsActiveMenu,
  isActiveCart,
  setIsActiveCart,
  addedToCart,
}: Props) => {
  const data = useContext(ProductContext);

  if (data === undefined) {
    return <div>Data is Loading</div>;
  }

  return (
    <Main isActiveMenu={isActiveMenu}>
      <Header isActiveCart={isActiveCart} setIsActiveCart={setIsActiveCart} />
      <AllCategories />
      <SalesOffers />
      <Products />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? (
        <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
      ) : (
        ""
      )}
      {isActiveCart ? (
        <CartMenu
          isActiveCart={isActiveCart}
          setIsActiveCart={setIsActiveCart}
          addedToCart={addedToCart}
        />
      ) : (
        ""
      )}
    </Main>
  );
};

const Main = styled.div<{ isActiveMenu: boolean }>`
  position: relative;

  width: 100%;
`;

export default LandingPage;
