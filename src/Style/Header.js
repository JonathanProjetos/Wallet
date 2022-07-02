import styled from 'styled-components';

export const CompHeader = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
background: #ffffff00;
backdrop-filter: blur(15px);


  div{
    display: flex;
    h1{
      font-size: 40px;
    }

    h2{
      margin-right: 20px
    }
  }
`;

export const CompHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px
 
`;
