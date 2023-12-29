//Import Components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Menu from "../components/Menu";

type Props = {
  isActiveMenu: boolean;

  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewAll = ({ isActiveMenu, setIsActiveMenu }: Props) => {
  return (
    <div>
      <Header />
      <Products />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? (
        <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewAll;
