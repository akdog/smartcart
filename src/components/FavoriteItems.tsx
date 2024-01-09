import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TProduct } from "../types/TProducts";
import FavoriteItem from "./FavoriteItem";

import { HiOutlineDotsHorizontal } from "react-icons/hi";

type Props = {
  addedToWishlist: TProduct[];
};

const FavoriteItems = ({ addedToWishlist }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Main>
      <div className="header-favorite">
        <h3>Personal Favourites</h3>
        <HiOutlineDotsHorizontal size="30" />
      </div>
      {addedToWishlist.map((item) => (
        <FavoriteItem
          item={item}
          key={item.id}
          onClick={() => handleNavigate(item.id)}
        />
      ))}
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 95%;

  margin: 0 auto;

  border-radius: 10px;
  border: 1px solid black;

  padding: 1rem;

  .header-favorite {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 1rem;
  }
`;

export default FavoriteItems;
