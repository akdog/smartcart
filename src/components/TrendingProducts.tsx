import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/store";

import Product from "./Product";
import styled from "styled-components";
import { TProduct } from "../types/TProducts";

type Props = {
  setAddedToWishlist: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addedToWishlist: TProduct[];
};

const TrendingProducts = ({ setAddedToWishlist, addedToWishlist }: Props) => {
  const data = useContext(ProductContext);

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Main>
      <div className="trending-header">
        <h1>Trending</h1>
        <Link to="/all">View All</Link>
      </div>
      <div className="trending-items">
        {data?.map((item) => (
          <Product
            item={item}
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            setAddedToWishlist={setAddedToWishlist}
            addedToWishlist={addedToWishlist}
          />
        ))}
      </div>
    </Main>
  );
};

const Main = styled.div`
  .trending-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 1rem;
  }

  .trending-items {
    display: flex;
    overflow-x: auto;
  }
`;

export default TrendingProducts;
