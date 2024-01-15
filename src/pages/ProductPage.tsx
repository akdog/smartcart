import { useState } from "react";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

//Import Context
import { useContext } from "react";
import { ProductContext } from "../context/store";

//Import Types
import { TProduct } from "../types/TProducts";

//Import Icons
import { IoIosArrowBack } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

//Import Components
import SinlgeProductInfo from "../components/SinlgeProductInfo";
import SinlgeProductDes from "../components/SinlgeProductDes";
import CartNavbar from "../components/CartNavbar";

type Props = {
  addedToCart: TProduct[];
  setAddedToCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

const ProductPage = ({ addedToCart, setAddedToCart }: Props) => {
  const data: TProduct[] | undefined = useContext(ProductContext);
  const [isToCart, setIsToCart] = useState<boolean>(false);

  const { id } = useParams();

  if (data === undefined) {
    return <div>Data Loading....</div>;
  }

  const parsedId = id ? parseInt(id, 10) : undefined;
  const single_product = data.find((item) => item.id == parsedId);

  if (!single_product) {
    return <div>Product Loading...</div>;
  }

  const handleAddToCart = () => {
    setAddedToCart([...addedToCart, single_product]);
    setIsToCart(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsToCart(false);
    }, 1000);
  };

  return (
    <Main>
      <div className="header">
        {isToCart ? (
          <motion.div
            className="is-to-cart"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheck size="30" color="#9dd536" />
            <div className="is-cart-text">
              <h3>Item Added To Your Cart</h3>
            </div>
          </motion.div>
        ) : (
          <>
            <Link to="/">
              <IoIosArrowBack size={30} />
            </Link>
            {addedToCart.length <= 0 ? (
              <BsCart3 size="30" />
            ) : (
              <div className="active-item-cart">
                <BsCart3 size="30" />
                <p>{addedToCart.length}</p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="img-container">
        <img src={single_product.image} />
      </div>
      <div className="text-container">
        <SinlgeProductInfo single_product={single_product} />
        <SinlgeProductDes single_product={single_product} />
      </div>
      <CartNavbar
        single_product={single_product}
        handleAddToCart={handleAddToCart}
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  .header {
    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 1rem;

    .active-item-cart {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      p {
        position: absolute;
        bottom: 60%;
        left: 60%;

        background: #ea2a2a;
        padding: 0.1rem 0.8rem;

        border-radius: 15px;
      }
    }

    .is-to-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;

      background: #e0e0e0;

      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      padding: 1rem;

      border-radius: 10px;

      width: 100%;

      .is-cart-text {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .img-container {
    img {
      width: 100%;
    }
  }

  .text-container {
    padding: 1rem;

    .description-container {
      margin-top: 1rem;
    }
  }
`;

export default ProductPage;
