import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

//Import Components
import Product from "./Product";

//Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { ProductContext } from "../context/store";

const Products = () => {
  const data = useContext(ProductContext);

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (data !== undefined) {
    return (
      <Main>
        <div className="header">
          <h3>View All</h3>
          <Link to="/all">
            <IoIosArrowForward size="30" />
          </Link>
        </div>
        {data.map((item) => (
          <Product
            item={item}
            key={item.id}
            onClick={() => handleNavigate(item.id)}
          />
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
