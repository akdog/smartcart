import styled from "styled-components";
import { TProduct } from "../types/TProducts";

type Props = {
  item: TProduct;
};

const FavoriteItem = ({ item }: Props) => {
  return (
    <Main>
      <div className="img-container">
        <img src={item.image} alt="" />
      </div>
      <div className="text-container">
        <div className="text-header">
          <h4>{item.title}</h4>
          <h4>heart</h4>
        </div>
        <h4>{item.price}</h4>
        <button>Add To Cart</button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .img-container {
    width: 30%;
    img {
      width: 100%;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    width: 80%;

    .text-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }

    button {
      width: 90%;
      padding: 1rem 0rem;

      border-radius: 10px;
      border: none;

      background: ${(props) => props.theme.colors.primaryFirst};
      color: white;
    }
  }
`;

export default FavoriteItem;
