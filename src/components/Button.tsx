import styled from "styled-components";

const Button = () => {
  return <ButtonStyled>Shop Now</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primaryFirst};
  color: white;

  border: none;
  border-radius: 10px;

  padding: 0.5rem 2rem;
`;

export default Button;
