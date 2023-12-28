import styled from "styled-components";
import Product from "./Product";

//Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { ProductContext } from "../context/store";

const Products = () => {
  const data = useContext(ProductContext);

  if (data !== undefined) {
    return (
      <Main>
        <div className="header">
          <h3>Just for you</h3>
          <IoIosArrowForward size="35" />
        </div>
        {data.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Main>
    );
  }

  return <div>Data Loading...</div>;
};

const Main = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 0.5rem;
  }
`;

export default Products;