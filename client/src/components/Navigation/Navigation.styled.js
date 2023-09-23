import styled from "styled-components";

export const NavigationStyled = styled.div`


  nav {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center

  }

  .btnContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .4em;
    height: 100%;
  }

  a {
    padding: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: .2em;
  }

  .logo{
    color: black;
    font-size: 24px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  .getStartedBtn {
    background: black;
    color: white;
    border-radius: 15px;
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
  }

  .loginBtn {
    background: #FAD7D7;
    color: black;
    border: 1px solid black;
    border-radius: 15px;
    width: 100%;
    height: 2em;
    font-size: 24px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120px;
  }

  @media (max-width: 425px) {
        color: white;
        .getStartedBtn{
          font-size: 12px;
          
        }
        .loginBtn{
          font-size: 20px;
        }
    }
    @media (min-width: 666px){
      .getStartedBtn{
        width: 150px;
        max-width: 500px;
      }
      .loginBtn{
        width: 180px;
        max-width: 500px;
      }
    }
  @media (min-width: 700px){
    .getStartedBtn{
          
          width: 200px;
          max-width: 500px;
        }
      .loginBtn{
        width: 230px;
          max-width: 500px;
      }
  }
`;
