import styled from "styled-components";

export const GSStepStyled = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 30px;
    font-weight: 200;
    margin: .6em;
  }

  .stepContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .step1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .step1 span {
  }

  .step2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .step3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .stepNumber {
    color: white;
    font-size: 30px;
  }

  .numberContainer {
    background: black;
    border-radius: 50%;
    width: 50px;
    border: 1px solid black;
  }

  .numberContainerNotSelected {
    background: white;
    border: 1px solid black;
    border-radius: 50%;
    width: 50px;
  }
  .numberContainerNotSelected span {
    color: #9b9b9b;
  }

  .stepName {
    font-size: 20px;
  }
`;
