import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../../../../../core/components/Input';
import { Button } from '../../../../../core/components/Button';

const Form = styled.form`
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const LoginForm: React.FC = () => {
  const [userAddress, setUserAddress] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserAddress(e.target.value);

  const submitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userAddress.length > 0) {
      navigate(`/dashboard/${userAddress}`);
    }
  };

  return (
    <Form onSubmit={submitLoginForm}>
      <Wrapper>
        <Input
          name="address"
          id="address"
          label="Address"
          type="text"
          value={userAddress}
          handleChange={handleUsernameChange}
          required
        />
      </Wrapper>
      <Button type="submit" text="Sign In" />
    </Form>
  );
};

export default LoginForm;
