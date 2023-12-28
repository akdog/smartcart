import { IoIosArrowBack } from "react-icons/io";

import styled from "styled-components";
import MenuItems from "./MenuItems";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setIsActiveMenu }: Props) => {
  const handleMenuHeader = () => {
    setIsActiveMenu(false);
  };

  const menuNames = [
    {
      name: "Wallet",
    },
    {
      name: "Redeem Gift Card",
    },
    {
      name: "Track Orders",
    },
    {
      name: "Buy Again",
    },
    {
      name: "Recently Searched",
    },
    {
      name: "Coupons",
    },
    {
      name: "Settings",
    },
    {
      name: "Customer Support",
    },
    {
      name: "Feedback",
    },
    {
      name: "Privacy & Security",
    },
  ];

  return (
    <Main>
      <div className="header">
        <div className="icon-container">
          <IoIosArrowBack size="35" color="white" onClick={handleMenuHeader} />
        </div>
        <div className="text-container">
          <p>Menu</p>
        </div>
      </div>

      {menuNames.map((item) => (
        <MenuItems item={item} />
      ))}
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  top: 6%;

  width: 100%;

  .header {
    display: flex;
    background: ${(props) => props.theme.colors.primaryFirst};

    padding: 0.5rem;

    border-radius: 20px 20px 0px 00px;
    .icon-container {
    }
    .text-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      color: white;

      width: 50%;
    }
  }
`;

export default Menu;
