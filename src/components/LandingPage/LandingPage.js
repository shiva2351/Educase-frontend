import { PageWrapper, Heading } from './PageStyles';

import { Link } from 'react-router-dom';
import { NavButton } from './PageStyles';

function LandingPage() {
  return (
<PageWrapper>
      <Heading>Welcome to the App</Heading>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Link to="/signin"><NavButton>Login</NavButton></Link>
      <Link to="/signup"><NavButton>Sign Up</NavButton></Link>
    </PageWrapper>
  );
}

export default LandingPage;