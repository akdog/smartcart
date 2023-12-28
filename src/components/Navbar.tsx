import styled from "styled-components";

//Import Icons
import { IoMdMenu } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setIsActiveMenu }: Props) => {
  const handleMenu = () => {
    setIsActiveMenu(true);
  };

  return (
    <Main>
      <div className="menu-container">
        <IoMdMenu id="menu-icon" onClick={handleMenu} />
      </div>
      <div className="icon-container">
        <div className="single-icon">
          <GoHome size="25" />
          <p>Home</p>
        </div>
        <div className="single-icon">
          <FaRegHeart size="25" />
          <p>Wishlist</p>
        </div>
        <div className="single-icon">
          <FaRegUser size="25" />
          <p>Profile</p>
        </div>
        <div className="single-icon">
          <IoMdSearch size="25" />
          <p>Search</p>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.nav`
  padding: 1rem;

  border-style: solid;
  border-width: 1px 0;
  border-color: #000;

  position: sticky;
  bottom: 0%;

  background: white;

  #menu-icon {
    color: White;
  }

  .menu-container {
    position: relative;

    svg {
      position: absolute;
      left: 40%;
      bottom: 18%;

      background: ${(props) => props.theme.colors.primaryFirst};
      border-radius: 50%;

      width: 14vw;
      height: 6vh;

      padding: 0.2rem;
    }
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .single-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Navbar;
