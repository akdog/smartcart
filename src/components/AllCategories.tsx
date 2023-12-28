import styled from "styled-components";

//Import Icons
import { BiCategory } from "react-icons/bi";
import { MdOutlineWatch } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { PiLightning } from "react-icons/pi";

const AllCategories = () => {
  return (
    <Main>
      <div className="single-category">
        <BiCategory size="25" color="#4BA4DF" />
        <p>Lorem</p>
      </div>
      <div className="single-category">
        <MdScreenSearchDesktop size="25" color="#4BA4DF" />
        <p>Lorem</p>
      </div>
      <div className="single-category">
        <MdOutlineWatch size="25" color="#4BA4DF" />
        <p>Lorem</p>
      </div>

      <div className="single-category">
        <PiLightning size="25" color="#4BA4DF" />
        <p>Lorem</p>
      </div>
      <div className="single-category">
        <MdOutlineDiscount size="25" color="#4BA4DF" />
        <p>Lorem</p>
      </div>
    </Main>
  );
};

const Main = styled.div`
  padding: 1rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .single-category {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default AllCategories;
