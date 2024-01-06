import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
  incValue: number;
  setIncValue: React.Dispatch<React.SetStateAction<number>>;
  incNumber: number;
  setIncNumber: React.Dispatch<React.SetStateAction<number>>;
};

const CartItems = ({
  item,
  incValue,
  setIncValue,
  incNumber,
  setIncNumber,
}: Props) => {
  return (
    <>
      <div className="cart-items">
        <div className="img-container">
          <img src={item?.image} />
        </div>
        <div className="cart-items-info">
          <p>Name</p>
          <div className="cart-increment">
            <FaMinus />
            <p>0</p>
            <FaPlus />
          </div>
        </div>
        <p>{incValue}$</p>
      </div>
    </>
  );
};

export default CartItems;
