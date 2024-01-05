import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
  addedToCart: TProduct[];
};

const CartItems = ({ item, addedToCart }: Props) => {
  const allPrices = addedToCart.map((item) => item.price);

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
            <p>1</p>
            <FaPlus />
          </div>
        </div>
        <p>{item?.price}$</p>
      </div>
      <div className="cart-total">
        <div className="total">
          <p>Cart Total</p>
          <p>{item?.price}$</p>
        </div>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default CartItems;
