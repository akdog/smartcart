import { useEffect, useState } from "react";
import styled from "styled-components";

const MobileMessage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop ? (
    <MessageContainer>
      <p>
        For the best experience, please switch to mobile view. Press F12 and
        Pick the Mobile desired to your needs
      </p>
    </MessageContainer>
  ) : null;
};

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  text-align: center;
  height: 110vh;
`;

export default MobileMessage;
