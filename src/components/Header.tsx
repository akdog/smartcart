import styled from "styled-components";
import Subheader from "./Subheader";

//Import Icons
import { IoLocationSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

//Import Types
import { TProduct } from "../types/TProducts";

type Props = {
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  addedToCart: TProduct[];
};

const Header = ({ isActiveCart, setIsActiveCart, addedToCart }: Props) => {
  const handleCart = () => {
    setIsActiveCart(!isActiveCart);
  };

  return (
    <Main>
      <HeaderStyled>
        <div className="location-container">
          <IoLocationSharp size="25" color="#4BA4DF" />
          <p>Deliver to Germany</p>
        </div>
        <div className="icon-container">
          <div className="background-icon">
            <CiBellOn size="30" />
          </div>
          <div className="background-icon">
            {addedToCart.length <= 0 ? (
              <BsCart3 size="30" onClick={handleCart} />
            ) : (
              <div className="active-item-cart">
                <BsCart3 size="30" onClick={handleCart} />
                <p>{addedToCart.length}</p>
              </div>
            )}
          </div>
        </div>
      </HeaderStyled>
      <Subheader />
    </Main>
  );
};

const Main = styled.div`
  padding: 1rem;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .location-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      color: ${(props) => props.theme.colors.primaryFirst};
    }
  }

  .icon-container {
    display: flex;
    gap: 1rem;
  }

  .background-icon {
    background: #e5e5e5;
    border-radius: 50%;

    width: 12vw;
    height: 6vh;

    display: flex;
    justify-content: center;
    align-items: center;

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
`;

export default Header;
