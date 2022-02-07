import React from 'react';
import styled from 'styled-components';

interface Error {
  message?: string;
  stack?: string;
}
interface Props {
  error: Error | null;
  id: string;
}

const StyledSpan = styled.span`
  margin-top: 1rem;
  display: block;
  color: rgb(176, 3, 3);
`;

const ErrorMessage: React.FC<Props> = ({ error, id }) => {
  if (error) {
    if (error.message) {
      return <StyledSpan id={id}>{error.message}</StyledSpan>;
    } else {
      return (
        <StyledSpan id={id}>
          Error has occurred. Please try again later.
        </StyledSpan>
      );
    }
  } else {
    return <span id={id} />;
  }
};

export { ErrorMessage };
