import styled from "styled-components";
import { TProduct } from "../types/TProducts";
import FavoriteItem from "./FavoriteItem";

type Props = {
  addedToWishlist: TProduct[];
};

const FavoriteItems = ({ addedToWishlist }: Props) => {
  return (
    <Main className="created-list-items">
      <div className="header-favorite">
        <h3>Personal Favourites</h3>
        <h3>settings</h3>
      </div>
      {addedToWishlist.map((item) => (
        <FavoriteItem item={item} key={item.id} />
      ))}
    </Main>
  );
};

const Main = styled.div`
  width: 95%;
  height: 40vh;

  margin: 0 auto;

  border-radius: 10px;
  border: 1px solid black;

  .header-favorite {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
  }
`;

export default FavoriteItems;
