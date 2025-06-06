import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 375px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const FormButton = styled.button`
 
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

export const InputField=styled.input`
type:${(props)=>(props.fieldType)};
id:${(props)=>(props.fieldType)}; 
title:${(props)=>(props.fieldType)};
 placeholder:${(props)=>(props.fieldType)};
 width: 100%;
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: #5b21b6;
  }

`

export const InputCard=styled.div`
         display:flex;
         flex-direction:column;
         border:2px solid red;`;


export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;