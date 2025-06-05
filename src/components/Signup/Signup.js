

import { PageWrapper, Heading, Input, FormButton,InputField } from './SignupStyles';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <PageWrapper>
      <Heading>Sign Up</Heading>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

        <InputField
                            fieldType="text"
                            fieldId="fullName"
                            fieldTitle="Full Name"
                            fieldPlaceholder="Enter full name"
                            
                        />
                        {/* Phone number */}
                        <InputField
                            fieldType="text"
                            fieldId="phoneNumber"
                            fieldTitle="Phone number"
                            fieldPlaceholder="Enter phone number"
                        />
                        {/* Email address */}
                        <InputField
                            fieldType="text"
                            fieldId="email"
                            fieldTitle="Email address"
                            fieldPlaceholder="Enter your email"
                        />
                        <InputField
                            fieldType="password"
                            fieldId="password"
                            fieldTitle="Password"
                            fieldPlaceholder="Enter password"
                        />
                        <InputField
                            fieldType="text"
                            fieldId="companyName"
                            fieldTitle="Company name"
                            fieldPlaceholder="Enter company name"
                            isRequired={false}
                        />


      <FormButton>Register</FormButton>
      <p>Already have an account? <Link to="/signin">Login</Link></p>
    </PageWrapper>
  );
}


export default Signup;