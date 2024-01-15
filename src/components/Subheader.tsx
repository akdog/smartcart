import styled from "styled-components";

const Subheader = () => {
  return (
    <SubheaderStyled>
      <h1>Name</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </SubheaderStyled>
  );
};

const SubheaderStyled = styled.nav`
  margin-top: 1rem;
`;

export default Subheader;
