import styled from "styled-components";

import { TProduct } from "../types/TProducts";

type Props = {
  single_product: TProduct;
  handleAddToCart: () => void;
};

const CartNavbar = ({ single_product, handleAddToCart }: Props) => {
  return (
    <Main>
      <div className="price-container">
        <h3>Price:</h3>
        <h3>{single_product.price}$</h3>
      </div>
      <div className="button-container">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 0%;

  background: #f4f4f4;

  width: 100%;
  padding: 1.5rem;

  .price-container {
    display: flex;
    gap: 0.3rem;
  }

  .button-container {
    button {
      background: ${(props) => props.theme.colors.SecondaryFirst};

      border: none;
      border-radius: 10px;
      padding: 1rem 4rem;
    }
  }
`;

export default CartNavbar;
