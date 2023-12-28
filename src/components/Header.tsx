import styled from "styled-components";
import Subheader from "./Subheader";

//Import Icons
import { IoLocationSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
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
            <BsCart3 size="30" />
          </div>
        </div>
      </HeaderStyled>
      <Subheader />
    </Main>
  );
};

const Main = styled.div`
  padding: 1rem;
  /* background-color: ${(props) => props.theme.colors.primaryFirst}; */
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
    background: ${(props) => props.theme.colors.NeutralGray};
    border-radius: 50%;

    width: 12vw;
    height: 6vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
