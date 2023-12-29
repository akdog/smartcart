import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

//Import Icons
import { IoIosArrowBack } from "react-icons/io";

//Import Utils
import { menuNames } from "../utils/MenuName.ts";

//Import Components
import MenuItems from "./MenuItems";

type Props = {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ isActiveMenu, setIsActiveMenu }: Props) => {
  const handleMenuHeader = () => {
    setIsActiveMenu(false);
  };

  return (
    <AnimatePresence>
      {isActiveMenu && (
        <StyledMenu
          initial={{ y: "100%" }}
          animate={{ y: 230 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <div className="header">
            <div className="icon-container">
              <IoIosArrowBack
                size="35"
                color="white"
                onClick={handleMenuHeader}
              />
            </div>
            <div className="text-container">
              <p>Menu</p>
            </div>
          </div>
          {menuNames.map((item) => (
            <MenuItems item={item} key={item.id} />
          ))}
        </StyledMenu>
      )}
    </AnimatePresence>
  );
};

const StyledMenu = styled(motion.div)`
  position: absolute;
  top: 0;

  width: 100%;

  display: flex;
  flex-direction: column;

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
