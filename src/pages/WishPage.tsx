import styled from "styled-components";

//Import Componetns
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import FavoriteItems from "../components/FavoriteItems";
import CreateList from "../components/CreateList";
import TrendingProducts from "../components/TrendingProducts";

//Import Icons
import { CiBellOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

//Import Types
import { TProduct } from "../types/TProducts";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedToWishlist: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addedToWishlist: TProduct[];
  isActiveMenu: boolean;
};

const WishPage = ({
  setIsActiveMenu,
  isActiveMenu,
  setAddedToWishlist,
  addedToWishlist,
}: Props) => {
  return (
    <Main>
      <div className="header">
        <h1>WishList</h1>
        <div className="icon-container">
          <CiBellOn size="35" />
          <BsCart3 size="30" />
        </div>
      </div>
      {addedToWishlist.length > 0 ? (
        <FavoriteItems addedToWishlist={addedToWishlist} />
      ) : (
        <CreateList />
      )}
      <TrendingProducts
        setAddedToWishlist={setAddedToWishlist}
        addedToWishlist={addedToWishlist}
      />
      <Navbar setIsActiveMenu={setIsActiveMenu} />
      {isActiveMenu ? (
        <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
      ) : (
        ""
      )}
    </Main>
  );
};

const Main = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default WishPage;
