import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { MdPrivacyTip } from "react-icons/md";

type Props = {
  item: any;
};

const MenuItems = ({ item }: Props) => {
  const getIcon = (name: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Wallet: <FaWallet color="#4BA4DF" />,
      "Redeem Gift Card": <MdOutlineCardGiftcard color="#4BA4DF" />,
      "Track Orders": <FaCarSide color="#4BA4DF" />,
      "Buy Again": <BsCartPlus color="#4BA4DF" />,
      "Recently Searched": <MdYoutubeSearchedFor color="#4BA4DF" size="20" />,
      Coupons: <FaWallet color="#4BA4DF" />,
      Settings: <IoSettings color="#4BA4DF" />,
      "Customer Support": <MdOutlineSupportAgent color="#4BA4DF" />,
      Feedback: <VscFeedback color="#4BA4DF" />,
      "Privacy & Security": <MdPrivacyTip color="#4BA4DF" />,
    };

    return iconMap[name] || null; // Return the icon or null if not found
  };

  const icon = getIcon(item.name);

  return (
    <>
      <Main>
        <div className="single-item">
          {icon && <span className="icon">{icon}</span>}
          <p>{item.name}</p>
        </div>
        <IoIosArrowForward />
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background: #ffffff;

  .single-item {
    display: flex;
    gap: 1rem;
  }
`;

export default MenuItems;
