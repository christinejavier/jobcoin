import styled from 'styled-components';
import { Logo } from '../../../../../core/components/Logo';
import LoginForm from '../../components/LoginForm';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
  border: 1px rgb(211, 211, 211) solid;
`;

const Welcome = styled.p`
  margin-top: 1rem;
`;

const LoginPage: React.FC = () => {
  return (
    <Main>
      <Container>
        <Logo />
        <Welcome>Welcome! Sign in With Your Jobcoin Address</Welcome>
        <LoginForm />
      </Container>
    </Main>
  );
};

export default LoginPage;
