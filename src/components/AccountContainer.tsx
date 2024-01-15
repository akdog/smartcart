import styled from "styled-components";

//Import Component
import CreateList from "./CreateList";

//Import Icons
import { IoBag } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const AccountContainer = () => {
  return (
    <Main>
      <div className="account-header">
        <h4>Account</h4>
        <p>View All</p>
      </div>
      <div className="account-options">
        <div className="options">
          <IoBag size="50" color="gray" />
          <h3>Orders</h3>
        </div>
        <div className="options">
          <MdPayment size="50" color="gray" />
          <h3>Payment Methods</h3>
        </div>
        <div className="options">
          <FaLocationDot size="50" color="gray" />
          <h3>Address</h3>
        </div>
      </div>
      <CreateList text="What Interests You?" topic="View Items" />
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

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default AccountContainer;
