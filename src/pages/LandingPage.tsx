import { useState, useContext } from "react";

//Import Components
import Header from "../components/Header";
import AllCategories from "../components/AllCategories";
import SalesOffers from "../components/SalesOffers";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import styled from "styled-components";
import { ProductContext } from "../context/store";

const LandingPage = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const data = useContext(ProductContext);

  if (data === undefined) {
    return <div>Data is Loading</div>;
  }

  return (
    <Main style={{ overflowY: isActiveMenu ? "auto" : "visible" }}>
      <Header />
      <AllCategories />
      <SalesOffers />
      <Products />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? <Menu setIsActiveMenu={setIsActiveMenu} /> : ""}
    </Main>
  );
};

const Main = styled.div`
  position: relative;
`;

export default LandingPage;
