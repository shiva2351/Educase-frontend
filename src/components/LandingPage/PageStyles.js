import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 375px;
  background-color: #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding:2rem;
  height:100vh;
  border:1px solid gray;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;


`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

 
export const NavButton = styled.button`
  background-color:rgb(108 37 255/var(--tw-bg-opacity,1));
  color: white;
  padding: 10px 15px;
  
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width:100%;
  font-weight:540;
  font-size:16px

`;

export const Loginbtn=styled(NavButton)`
background-color:rgb(206 186 251 / var(--tw-bg-opacity, 1));
margin-top:10px;
color:black;
`;


export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
export const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Landcard = styled.div`
 
 height:30vh
`;