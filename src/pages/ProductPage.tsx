import { useState } from "react";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

//Import Context
import { useContext } from "react";
import { ProductContext } from "../context/store";

//Import Types
import { TProduct } from "../types/TProducts";

//Import Icons
import { IoIosArrowBack } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

//Import Components
import SinlgeProductInfo from "../components/SinlgeProductInfo";
import SinlgeProductDes from "../components/SinlgeProductDes";
import CartNavbar from "../components/CartNavbar";
import TrendingProducts from "../components/TrendingProducts";

type Props = {
  addedToCart: TProduct[];
  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const ProductPage = ({ addedToCart, setAddedToCart }: Props) => {
  const data: TProduct[] | undefined = useContext(ProductContext);

  const { id } = useParams();

  if (data === undefined) {
    return <div>Data Loading....</div>;
  }

  const parsedId = id ? parseInt(id, 10) : undefined;
  const single_product = data.find((item) => item.id == parsedId);

  if (!single_product) {
    return <div>Product Loading...</div>;
  }

  const handleAddToCart = () => {
    setAddedToCart([...addedToCart, single_product]);
  };

  return (
    <Main>
      <div className="header">
        <Link to="/">
          <IoIosArrowBack size={30} />
        </Link>
        <BsCart3 size={30} />
      </div>
      <div className="img-container">
        <img src={single_product.image} />
      </div>
      <div className="text-container">
        <SinlgeProductInfo single_product={single_product} />
        <SinlgeProductDes single_product={single_product} />
      </div>
      <CartNavbar
        single_product={single_product}
        handleAddToCart={handleAddToCart}
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  .header {
    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 1rem;
  }
  .img-container {
    img {
      width: 100%;
    }
  }

  .text-container {
    padding: 1rem;

    .description-container {
      margin-top: 1rem;
    }
  }
`;

export default ProductPage;
