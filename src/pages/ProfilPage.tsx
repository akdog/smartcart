import styled from "styled-components";

//Import Types
import { TProduct } from "../types/TProducts";

//Import Components
import Navbar from "../components/Navbar";
import AccountContainer from "../components/AccountContainer";
import ProfileContainer from "../components/ProfileContainer";
import CartMenu from "../components/CartMenu";
import Menu from "../components/Menu";

//Import Icons
import IconContainer from "../components/IconContainer";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveMenu: boolean;
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  addedToCart: TProduct[];

  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const ProfilPage = ({
  setIsActiveMenu,
  isActiveMenu,
  isActiveCart,
  setIsActiveCart,
  addedToCart,
  setAddedToCart,
}: Props) => {
  return (
    <Main>
      <div className="header">
        <h1>Profile</h1>
        <IconContainer
          addedToCart={addedToCart}
          setIsActiveCart={setIsActiveCart}
          isActiveCart={isActiveCart}
        />
      </div>
      <ProfileContainer />
      <AccountContainer />
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
          setAddedToCart={setAddedToCart}
        />
      ) : (
        ""
      )}
    </Main>
  );
};

const Main = styled.div`
  position: relative;

  .header {
    padding: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .active-item-cart {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        p {
          position: absolute;
          bottom: 60%;
          left: 60%;

          background: #ea2a2a;
          padding: 0.1rem 0.8rem;

          border-radius: 15px;
        }
      }
    }
  }
`;

export default ProfilPage;
