import { useState } from "react";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
  addedToCart: TProduct[];
  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const CartItems = ({ item, addedToCart, setAddedToCart }: Props) => {
  const [incNumber, setIncNumber] = useState<number>(1);

  const increment = () => {
    setIncNumber((prev) => prev + 1);
  };

  const decrement = () => {
    if (incNumber > 1) {
      setIncNumber((prev) => prev - 1);
    }
  };

  const handleDelete = (id: number) => {
    setAddedToCart(addedToCart.filter((item) => item.id !== id));
  };

  const totalPrice = item.price * incNumber;

  return (
    <>
      <div className="cart-items">
        <div className="img-container">
          <img src={item?.image} />
        </div>
        <div className="cart-items-info">
          <p>Name</p>
          <div className="cart-increment">
            <FaMinus onClick={decrement} />
            <p>{incNumber}</p>
            <FaPlus onClick={increment} />
          </div>
        </div>
        <p>{totalPrice.toFixed(2)}$</p>
        <div className="cart-delete">
          <MdDelete size="25" onClick={() => handleDelete(item.id)} />
        </div>
      </div>
    </>
  );
};

export default CartItems;
