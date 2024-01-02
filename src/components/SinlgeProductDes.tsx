import styled from "styled-components";
//Import Types
import { TProduct } from "../types/TProducts";

//Import Components
import Reviews from "./Reviews";

type Props = {
  single_product: TProduct;
};

const SinlgeProductDes = ({ single_product }: Props) => {
  return (
    <Main>
      <div className="description-container">
        <h3>Description</h3>
        <p>{single_product.description}</p>
      </div>
      <h3>Review</h3>
      <Reviews />
      <Reviews />
      <Reviews />
      <Reviews />
    </Main>
  );
};

const Main = styled.div`
  h3 {
    margin-top: 1rem;
  }
`;

export default SinlgeProductDes;
