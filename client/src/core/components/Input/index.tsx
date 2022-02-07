import React from 'react';
import styled from 'styled-components';

export type InputType = 'email' | 'number' | 'password' | 'phone' | 'text';

interface Props {
  ariaInvalid?: boolean;
  errorId?: string;
  id: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  type: InputType;
  value: string;
}

const Label = styled.label`
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  font-family: 'Helvetica', 'Arial';
`;

const StyledInput = styled.input`
  ${(props) =>
    props['aria-invalid'] &&
    `
border-color: rgb(176, 3, 3);
`}
`;

const Input: React.FC<Props> = (props) => {
  const {
    ariaInvalid,
    errorId,
    id,
    name,
    label,
    placeholder = label,
    required = false,
    type,
    handleChange,
    value,
  } = props;

  return (
    <>
      <Label htmlFor={id}>{label}:</Label>
      <StyledInput
        aria-invalid={ariaInvalid}
        aria-describedby={errorId}
        aria-errormessage={errorId}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
        value={value}
      />
    </>
  );
};

export { Input };
