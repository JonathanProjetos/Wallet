import styled from 'styled-components';
import imagens from './foto.jpg';

export const AppHeader = styled.section`
  overflow-x: hidden;
  background-image: url(${imagens});
  background-color: green;
  width:100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-clip: padding-box;
  background-size: 100%;

  div{

    img{
      width:220px;
      height:220px;
    }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    border: 1px solid black;
    height: 450px;
    width: 450px;
    background: #ffffff00;
    backdrop-filter: blur(2px);
    box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.99);
    label{ 
      margin: 10px;
    }

    button{
      font-weight: bold;
      border-radius: 10px
      
    }
  }
`;

export const AppLabel = styled.label`
color: red;
`;

export const AppInput = styled.input`
color: black;
font-size: 1em;

border: 0px solid palevioletred;
border-radius: 3px;
text-align: center;
border-radius: 10px;
background: #ffffff91;
font-weight: bold;
`;
