import styled from "styled-components";
import shoes from "../assets/shoes.png";

const CreateList = () => {
  return (
    <Main>
      <div className="img-container">
        <img src={shoes} />
      </div>
      <h3>You have no Saved Products</h3>
      <button>+ Create a Wishlist</button>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 45vh;

  width: 95%;
  margin: 0 auto;

  border-radius: 20px;

  background-color: ${(props) => props.theme.colors.primaryFirst};

  color: white;

  button {
    padding: 1rem 4rem;
    border: none;
    border-radius: 10px;
  }

  .img-container {
    width: 50%;
    img {
      width: 100%;
    }
  }
`;

export default CreateList;
