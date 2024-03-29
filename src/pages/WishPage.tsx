import styled from "styled-components";

//Import Componetns
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import FavoriteItems from "../components/FavoriteItems";
import CreateList from "../components/CreateList";
import TrendingProducts from "../components/TrendingProducts";

//Import Types
import { TProduct } from "../types/TProducts";
import CartMenu from "../components/CartMenu";
import IconContainer from "../components/IconContainer";

type Props = {
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedToWishlist: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addedToWishlist: TProduct[];
  isActiveMenu: boolean;
  addedToCart: TProduct[];
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const WishPage = ({
  setIsActiveMenu,
  isActiveMenu,
  setAddedToWishlist,
  addedToWishlist,
  addedToCart,
  isActiveCart,
  setIsActiveCart,
  setAddedToCart,
}: Props) => {
  return (
    <Main>
      <div className="header">
        <h1>WishList</h1>
        <IconContainer
          addedToCart={addedToCart}
          setIsActiveCart={setIsActiveCart}
          isActiveCart={isActiveCart}
        />
      </div>
      {addedToWishlist.length > 0 ? (
        <FavoriteItems addedToWishlist={addedToWishlist} />
      ) : (
        <CreateList
          text="You have no Saved Products"
          topic="Create a Wishlist"
        />
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
      {isActiveCart ? (
        <CartMenu
          isActiveCart={isActiveCart}
          setIsActiveCart={setIsActiveCart}
          addedToCart={addedToCart}
          setAddedToCart={setAddedToCart}
        />
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
  }
`;

export default WishPage;
