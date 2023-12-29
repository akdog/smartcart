import { IoIosArrowBack } from "react-icons/io";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { menuNames } from "../utils/MenuName.ts";
import MenuItems from "./MenuItems";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setIsActiveMenu }: Props) => {
  const handleMenuHeader = () => {
    setIsActiveMenu(false);
  };

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Main style={{ top: currentLocation === "/all" ? "20%" : "3%" }}>
      <div className="header">
        <div className="icon-container">
          <IoIosArrowBack size="35" color="white" onClick={handleMenuHeader} />
        </div>
        <div className="text-container">
          <p>Menu</p>
        </div>
      </div>
      {menuNames.map((item) => (
        <MenuItems item={item} key={item.id} />
      ))}
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  top: 4%;

  width: 100%;

  .header {
    display: flex;
    background: ${(props) => props.theme.colors.primaryFirst};

    padding: 2rem 1rem;

    border-radius: 20px 20px 0px 00px;

    .text-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      color: #ffffff;

      width: 50%;
    }
  }
`;

export default Menu;
