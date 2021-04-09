import styled from "styled-components";

export const ErrorBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  opacity: ${(props) => (props.error ? 1 : 0)};
  cursor: default;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 16px;
  height: 12px;
  overflow: hidden;
  margin-top: 6px;
  margin-left: 13px;
`;

export const BubbleArrow = styled.div`
  width: 16px;
  height: 16px;
  margin-top: 8px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  transform: rotate(45deg);
`;

export const Bubble = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 48px;
  margin: 0;
  padding: 0;

  color: white;

  font-size: 16px;
  font-weight: 600;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;
