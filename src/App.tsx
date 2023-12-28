import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

//Import Pages
import LandingPage from "./pages/LandingPage";
import StoreProvider from "./context/storeProvider";

const App = () => {
  return (
    <>
      <StoreProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LandingPage />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`

  *{
    padding:0;
    margin:0;
    box-sizing:border-box
  }

  body{
    font-family: 'Poppins', sans-serif;
  }

`;

export default App;
