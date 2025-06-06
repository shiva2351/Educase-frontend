import { PageWrapper, Heading, Input, FormButton,Logindiv } from './LoginStyles';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <PageWrapper>
      <Heading>Signin to your
PopX account</Heading>
<p>Lorem ipsum dolor sit amet,
consectetur adipisicing elit.</p>
<Logindiv>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <FormButton>Login</FormButton>
      </Logindiv>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </PageWrapper>
  );
}

export default Login;