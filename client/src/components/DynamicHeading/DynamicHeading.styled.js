import styled from "styled-components";

export const DynamicHeadingStyled = styled.h1`
  color: white;
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;


  .heading {
    transition: opacity 0.9s ease; /* Add a transition for opacity */
    opacity: 1; /* Initial opacity */
    color: pink;
  }

  .heading.fade-out {
    opacity: 0; /* Set opacity to 0 when fading out */
  }

  @media (max-width: 425px) {
      font-size: 15px;
    }
  @media (min-width: 1000px){
    font-size: 27px; 
  }
  @media (min-width: 1400px) {
    
      font-size: 50px;
      width: 90%;

  }
`;
