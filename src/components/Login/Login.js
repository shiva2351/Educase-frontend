import { PageWrapper, Heading, Input, FormButton } from './LoginStyles';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <PageWrapper>
      <Heading>Login</Heading>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <FormButton>Login</FormButton>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </PageWrapper>
  );
}

export default Login;