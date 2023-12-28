import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const MenuItems = ({ item }) => {
  return (
    <>
      <Main>
        <div className="single-item">
          <p>icon</p>
          <p>{item.name}</p>
        </div>
        <IoIosArrowForward />
      </Main>
      <hr />
    </>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background: white;

  .single-item {
    display: flex;
    gap: 1rem;
  }
`;

export default MenuItems;
