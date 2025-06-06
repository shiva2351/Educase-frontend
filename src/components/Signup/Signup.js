

import { PageWrapper, Heading, Input, FormButton,InputField,InputCard ,Label} from './SignupStyles';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <PageWrapper>
      <Heading>Create your
PopX account</Heading>


        <InputCard >
          <Label htmlFor='fullName' >Name</Label>

        <InputField  type="text"
                            id="fullName"
                            fieldTitle="Full Name"
                    placeholder="Enter full name"/>
        </InputCard>

 <InputCard >
          <Label htmlFor='fullName' >Name</Label>
 <InputField
                            type="text"
                            fieldId="phoneNumber"
                            title="Phone number"
                            placeholder="Enter phone number"
                        />
        </InputCard>


 <InputCard >
          <Label htmlFor='fullName' >Name</Label> <InputField
                            type="text"
                            id="email"
                            title="Email address"
                            placeholder="Enter your email"
                        />
        </InputCard>

         <InputCard >
          <Label htmlFor='fullName' >Name</Label> 
          <InputField
                            type="password"
                            id="password"
                            title="Password"
                            placeholder="Enter password"
                        />
        </InputCard>
          <Label htmlFor='fullName' >Name</Label> 

                       
                     <InputCard > <InputField
                            type="text"
                            id="companyName"
                            title="Company name"
                            placeholder="Enter company name"
                            isRequired={false}
                        />
        </InputCard>


                       


      <Link to="/profile"><FormButton>
        Create Account</FormButton></Link>
    </PageWrapper>
  );
}


export default Signup;