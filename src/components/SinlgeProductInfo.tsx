import { IoStarSharp } from "react-icons/io5";

//Import Type
import { TProduct } from "../types/TProducts";
import styled from "styled-components";

type Props = {
  single_product: TProduct;
};

const SinlgeProductInfo = ({ single_product }: Props) => {
  return (
    <Main>
      <div className="product-detail">
        <h2>{single_product.title}</h2>
        <div className="rating-container">
          <p>{single_product.rating.rate}</p>
          <IoStarSharp color="yellow" />
        </div>
      </div>
      <div className="variant-container">
        <div className="variant">
          <div className="variant-header">
            <h2>Black</h2>
            <hr />
          </div>
          <h3>{single_product.price}$</h3>
          <p>{single_product.rating.count} Units in Stock</p>
        </div>
        <div className="variant">
          <div className="variant-header">
            <h2>White</h2>
            <hr />
          </div>
          <h3>{single_product.price}$</h3>
          <p>{single_product.rating.count} Units in Stock</p>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  .product-detail {
    .rating-container {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      width: 100%;
    }
  }

  .variant-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    margin-top: 1rem;

    .variant {
      border-radius: 10px;
      border: 1px solid black;

      width: 50%;
      padding: 1rem;

      p {
        font-size: 0.9rem;
      }
    }
  }
`;

export default SinlgeProductInfo;
