import styled from "styled-components";

//Import Icons
import { CiHeart } from "react-icons/ci";
import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
};

const Product = ({ item }: Props) => {
  return (
    <Main>
      <div className="product-container">
        <CiHeart size="35" />
        <div className="img-container">
          <img src={item.image} />
        </div>
        <div className="text-container">
          <p>{item.title}</p>
          <p>{item.price}$</p>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  padding: 1rem;

  .product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .img-container {
      width: 50%;
      height: 22vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;

export default Product;
