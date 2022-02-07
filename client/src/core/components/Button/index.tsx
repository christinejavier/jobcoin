import React from 'react';

interface Props {
  handleClick?: () => void;
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<Props> = ({ text, type = 'button', handleClick }) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export { Button };
