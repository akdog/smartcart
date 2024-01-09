import { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

//Import Icons
import { CiHeart } from "react-icons/ci";
import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
  onClick?: () => void;
  setAddedToWishlist: React.Dispatch<React.SetStateAction<TProduct[]>>;
  addedToWishlist: TProduct[];
};

const Product = ({
  item,
  onClick,
  setAddedToWishlist,
  addedToWishlist,
}: Props) => {
  const [isWishList, setIsWishlist] = useState<boolean>(false);

  const handleWish = () => {
    setIsWishlist(!isWishList);
    setAddedToWishlist([...addedToWishlist, item]);
  };

  const handleWishDelete = (id: number) => {
    setIsWishlist(!isWishList);
    setAddedToWishlist(addedToWishlist.filter((item) => item.id !== id));
  };

  return (
    <Main>
      <div className="product-container">
        {isWishList ? (
          <motion.div
            className="animated-heart"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <CiHeart
              size="35"
              color="red"
              onClick={() => handleWishDelete(item.id)}
            />
          </motion.div>
        ) : (
          <motion.div
            className="animated-heart"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <CiHeart size="35" onClick={handleWish} />
          </motion.div>
        )}
        <div className="img-container" onClick={onClick}>
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

    width: 90vw;

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

    .animated-heart {
      margin-left: auto;
    }

    svg {
      margin-left: auto;
    }
  }
`;

export default Product;
