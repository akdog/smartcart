import styled from "styled-components";

//Import Componetns
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import FavoriteItems from "../components/FavoriteItems";
import CreateList from "../components/CreateList";
import TrendingProducts from "../components/TrendingProducts";
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
        <h1>Icon</h1>
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
  }
`;

export default WishPage;
