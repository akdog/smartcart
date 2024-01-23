import { useEffect } from "react";
import styled from "styled-components";

const MobileMessage = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <MessageContainer>
      <p>
        For the best experience, please switch to mobile view. Press F12 and
        Pick the Mobile desired to your needs
      </p>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8d7da;
    color: #721c24;
    padding: 0.75rem;
    text-align: center;

    height: 110vh;
  }
`;

export default MobileMessage;
