import styled from "styled-components";

//Import Img
import profileIMG from "../assets/profile.jpg";

const ProfileContainer = () => {
  return (
    <Main>
      <div className="img-container">
        <img src={profileIMG} />
      </div>
      <h3>Max Mustermann</h3>
      <h4>Mustermann@Mustermann.de</h4>
      <button>Edit Profile</button>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;

  border: 1px solid black;
  border-radius: 10px;

  padding: 2rem;

  width: 95%;
  margin: 0 auto;

  button {
    padding: 1rem 4rem;
    background: none;

    border-radius: 10px;
    border: 1px solid black;
  }

  .img-container {
    width: 20%;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`;

export default ProfileContainer;
