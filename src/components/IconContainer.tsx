//Import Icons
import { CiBellOn } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

//Import Type
import { TProduct } from "../types/TProducts";

type Props = {
  addedToCart: TProduct[];
  isActiveCart: boolean;
  setIsActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const IconContainer = ({
  addedToCart,
  setIsActiveCart,
  isActiveCart,
}: Props) => {
  const handleCart = () => {
    setIsActiveCart(!isActiveCart);
  };

  return (
    <div className="icon-container">
      <CiBellOn size="35" />
      {addedToCart.length <= 0 ? (
        <BsCart3 size="30" onClick={handleCart} />
      ) : (
        <div className="active-item-cart">
          <BsCart3 size="30" onClick={handleCart} />
          <p>{addedToCart.length}</p>
        </div>
      )}
    </div>
  );
};

export default IconContainer;
