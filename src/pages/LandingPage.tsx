import { useContext } from "react";

//Import Components
import Header from "../components/Header";
import AllCategories from "../components/AllCategories";
import SalesOffers from "../components/SalesOffers";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import styled from "styled-components";
import { ProductContext } from "../context/store";

type Props = {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const LandingPage = ({ isActiveMenu, setIsActiveMenu }: Props) => {
  const data = useContext(ProductContext);

  if (data === undefined) {
    return <div>Data is Loading</div>;
  }

  return (
    <Main isActiveMenu={isActiveMenu}>
      <Header />
      <AllCategories />
      <SalesOffers />
      <Products />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? (
        <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
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
