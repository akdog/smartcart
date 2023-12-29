import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

type Props = {
  item: any;
};

const MenuItems = ({ item }: Props) => {
  return (
    <>
      <Main>
        <div className="single-item">
          <p>icon</p>
          <p>{item.name}</p>
        </div>
        <IoIosArrowForward />
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background: #ffffff;

  .single-item {
    display: flex;
    gap: 1rem;
  }
`;

export default MenuItems;
