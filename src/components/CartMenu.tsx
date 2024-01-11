import { useState } from "react";
import styled from "styled-components";

import { TProduct } from "../types/TProducts";

import { CiCircleRemove } from "react-icons/ci";
import CartItems from "./CartItems";

type Props = {
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  addedToCart: TProduct[];
  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const CartMenu = ({
  isActiveCart,
  setIsActiveCart,
  addedToCart,
  setAddedToCart,
}: Props) => {
  const [incValue, setIncValue] = useState<number>(0);
  const [incNumber, setIncNumber] = useState<number>(1);

  const handleCart = () => {
    setIsActiveCart(false);
  };

  const allPrices = addedToCart.map((item) => item.price);

  const sumPrices = allPrices.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  if (addedToCart.length >= 0) {
    return (
      <Main>
        <h3>No Cart Items found...</h3>
      </Main>
    );
  }

  return (
    <Main>
      <div className="cart-header">
        <h3>Cart</h3>
        <CiCircleRemove size="30" onClick={handleCart} />
      </div>
      {addedToCart.map((item) => (
        <CartItems
          item={item}
          key={item.id}
          incValue={incValue}
          setIncValue={setIncValue}
          incNumber={incNumber}
          setIncNumber={setIncNumber}
        />
      ))}
      <div className="cart-total">
        <div className="total">
          <p>Cart Total</p>
          <p>{sumPrices}</p>
        </div>
        <button>Checkout</button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: white;

  padding: 1rem;

  position: sticky;
  bottom: 6%;

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .cart-items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;

    margin-top: 1.5rem;

    .img-container {
      width: 15%;
      img {
        width: 100%;
      }
    }

    .cart-increment {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .cart-items-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    button {
      width: 65%;
      padding: 1rem 0rem;

      border: none;
      border-radius: 10px;

      background: ${(props) => props.theme.colors.SecondaryFirst};
    }
  }
`;

export default CartMenu;
