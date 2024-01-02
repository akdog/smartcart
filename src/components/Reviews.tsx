import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

const Reviews = () => {
  return (
    <Main>
      <div className="review-text">
        <div className="review-header">
          <div className="review-single-header">
            <h4>Quality Product</h4>
            <IoStarSharp color="yellow" />
          </div>
          <p>January 1st 2024</p>
        </div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis
          architecto? Error numquam repudiandae laborum enim, qui deleniti sit
          ratione quis eius excepturi, provident temporibus!
        </h4>
        <hr />
      </div>
    </Main>
  );
};

const Main = styled.div`
  margin-top: 1rem;
  .review-text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.35rem;

    .review-single-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
  }
`;

export default Reviews;
