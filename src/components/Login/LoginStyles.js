import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 375px;
  background-color: #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height:100vh;
  border:1px solid gray;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

 
export const NavButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;


export const Input = styled.input`
  width: 90%;
  padding:10px 15px;
  
  border: 1px solid #ccc;
  border-radius: 8px;
`;
export const FormButton = styled.button`
background-color:rgb(206 186 251 / var(--tw-bg-opacity, 1));
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Logindiv = styled.div`
  border:2px solid yellow;
  display:flex;
  flex-direction:column;
  align-items:flex-grow;

`;