import { PageWrapper, Heading ,Landcard, Loginbtn} from './PageStyles';

import { Link } from 'react-router-dom';
import { NavButton } from './PageStyles';

function LandingPage() {
  return (
<PageWrapper>
  <Landcard>
      <Heading>Welcome to the App</Heading>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Link to="/signup"><NavButton>Create Account</NavButton></Link>
      <Link to="/signin"><Loginbtn>Already Registered? Login</Loginbtn></Link>
      </Landcard>
    </PageWrapper>
  );
}

export default LandingPage;