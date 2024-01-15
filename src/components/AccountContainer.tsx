import styled from "styled-components";

//Import Component
import CreateList from "./CreateList";

const AccountContainer = () => {
  return (
    <Main>
      <div className="account-header">
        <h4>Account</h4>
        <p>View All</p>
      </div>
      <div className="account-options">
        <div className="options">
          <h1>icon</h1>
          <h3>Orders</h3>
        </div>
        <div className="options">
          <h1>icon</h1>
          <h3>Orders</h3>
        </div>
        <div className="options">
          <h1>icon</h1>
          <h3>Orders</h3>
        </div>
      </div>
      <CreateList text="You have no Saved Products" topic="Create a Wishlist" />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  padding: 0.5rem;

  .account-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0rem;

    width: 100%;
  }

  .account-options {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

export default AccountContainer;
