import styled from 'styled-components';

export const PageWrapper = styled.div`
 width: 375px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border:1px solid gray;
  text-align: center;
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




export const Image=styled.img`
  width:80px;
  height:80px;
  border-radius:100px;
  margin-right:20px;

`;
export const Procard=styled.div`
  display:flex;
  align-content:center;
  padding:20px
  
`;

export const Prodiv=styled.div`
  display:flex;
  flex-direction:column;
  padding:20px

`;

export const Prohead=styled.div`
  display:flex;white;
  background-color:white;
  shadow:2;
  height:10vh;
  display:flex;
  align-items:center;

`;


export const Proheader=styled.div`
font-weight:normal;
padding-left:20px
`;

export const Procontent=styled.div`
background-color:lightgrey;
height:90vh;
`