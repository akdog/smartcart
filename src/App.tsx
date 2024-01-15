import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

//Import Types
import { TProduct } from "./types/TProducts";

//Import Pages
import LandingPage from "./pages/LandingPage";
import ViewAll from "./pages/ViewAll";
import ProductPage from "./pages/ProductPage";
import WishPage from "./pages/WishPage";

//Import Context
import StoreProvider from "./context/StoreProvider";
import ProfilPage from "./pages/ProfilPage";

const App = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const [isActiveCart, setIsActiveCart] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<TProduct[]>([]);
  const [addedToWishlist, setAddedToWishlist] = useState<TProduct[]>([]);

  return (
    <>
      <StoreProvider>
        <GlobalStyle isActiveMenu={isActiveMenu} />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  isActiveMenu={isActiveMenu}
                  setIsActiveMenu={setIsActiveMenu}
                  isActiveCart={isActiveCart}
                  setIsActiveCart={setIsActiveCart}
                  setAddedToCart={setAddedToCart}
                  addedToCart={addedToCart}
                  setAddedToWishlist={setAddedToWishlist}
                  addedToWishlist={addedToWishlist}
                />
              }
            />
            <Route
              path="/all"
              element={
                <ViewAll
                  isActiveMenu={isActiveMenu}
                  setIsActiveMenu={setIsActiveMenu}
                  isActiveCart={isActiveCart}
                  setIsActiveCart={setIsActiveCart}
                  setAddedToWishlist={setAddedToWishlist}
                  addedToWishlist={addedToWishlist}
                  addedToCart={addedToCart}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  addedToCart={addedToCart}
                  setAddedToCart={setAddedToCart}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <WishPage
                  setIsActiveMenu={setIsActiveMenu}
                  isActiveMenu={isActiveMenu}
                  addedToWishlist={addedToWishlist}
                  setAddedToWishlist={setAddedToWishlist}
                  addedToCart={addedToCart}
                  isActiveCart={isActiveCart}
                  setIsActiveCart={setIsActiveCart}
                  setAddedToCart={setAddedToCart}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProfilPage
                  isActiveMenu={isActiveMenu}
                  setIsActiveMenu={setIsActiveMenu}
                  isActiveCart={isActiveCart}
                  setIsActiveCart={setIsActiveCart}
                  setAddedToCart={setAddedToCart}
                  addedToCart={addedToCart}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle<{ isActiveMenu: boolean }>`

  *{
    padding:0;
    margin:0;
    box-sizing:border-box
  }

  body{
    font-family: 'Poppins', sans-serif;
    overflow: ${(props) => (props.isActiveMenu ? "hidden" : "auto")};
  }

  a{
    text-decoration:none;
    color:black;
  }

  h1{
    font-weight:500;
  }

  h2{
    font-weight:400;
  }

  h3{
    font-weight:300;
  }
  
  `;

export default App;
