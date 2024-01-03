import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

//Import Pages
import LandingPage from "./pages/LandingPage";
import ViewAll from "./pages/ViewAll";
import ProductPage from "./pages/ProductPage";

//Import Context
import StoreProvider from "./context/StoreProvider";

const App = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const [isActiveCart, setIsActiveCart] = useState<boolean>(false);

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <>
      <StoreProvider currentLocation={currentLocation}>
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
                />
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
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
  
  `;

export default App;
