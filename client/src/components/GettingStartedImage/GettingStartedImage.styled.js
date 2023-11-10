import styled from "styled-components";

export const GettingStartedImageStyles = styled.section`
  .GettingStartedImage {
    width: 100%; /* Make the image fill the container horizontally */
    height: 100%; /* Make the image fill the container vertically */
    object-fit: cover;
  }

  .ImageContainer {
    display: none;
  }

  @media (min-width: 750px) {
    width: 50%;
    .ImageContainer {
      display: flex;
        width: 100%;
    }
    .GettingStartedImage {

    }
  }

  @media (min-width: 1070px) {

      max-height: 700px;
      overflow: hidden;
  

    .ImageContainer {
      
    }
    .GettingStartedImage {
        object-fit: fill;

    }
  }

  @media (min-width: 1500px) {
  }
`;
