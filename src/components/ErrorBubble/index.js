import * as Styled from "./styled";

/**
 * Displays an error message. 
 * Primarily used on login errors.
 */

const ErrorBubble = ({ message, error = false}) => {
  return (
    <Styled.ErrorBubbleWrapper error={error}>
      <Styled.ArrowContainer>
        <Styled.BubbleArrow />
      </Styled.ArrowContainer>

      <Styled.Bubble>{message}</Styled.Bubble>
    </Styled.ErrorBubbleWrapper>
  );
};

export default ErrorBubble;
