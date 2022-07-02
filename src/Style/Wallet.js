import styled from 'styled-components';
import imagens from './foto2.jpg';

export const MainBody = styled.main`
  background-image: url(${imagens});
  background-size: cover;
  width:100vw;
  height: 100vh;
  div{
    display: flex;
    flex-direction: row;
  }
  label{
    font-size: 25px
  }
  input {
    border-radius: 5px;
    background: #ffffff60;
    backdrop-filter: blur(2px);
    padding: 8px;
    font-size: 15px;
  }

  select {
    border-radius: 5px;
    background: #ffffff60;
    backdrop-filter: blur(2px);
    padding: 8px;
    font-size: 15px;
  }

  button {
    border-radius: 5px;
    background: #ffffff80;
    backdrop-filter: blur(2px);
    padding: 8px;
    text-align: center;
    font-size: 15px;
  }


`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TabelaStyle = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  border-spacing: 10px;

  div{
    table{
      thead{
        tr{
          th{
            padding: 8px;
            border: solid 1px black;
            border-radius: 5px;
            background: #ffffff00;
            //backdrop-filter: blur(2px);
          }
        }
      }

      tbody{
        tr{
          td{
            border: solid 1px black;
            border-radius: 5px;
            background: #ffffff80;
            backdrop-filter: blur(10px);
            text-align: center;

            img{
              height: 40px;
              width: 40px;
              margin: 5px;
            }
            
            button {
              width: 4vw;
              height: 4vh;
            }
          }

        }
      }
    }
  }
`;
