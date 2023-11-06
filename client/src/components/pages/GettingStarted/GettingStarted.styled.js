import styled from "styled-components";

export const GettingStartedStyles = styled.div`
  color: black;
  max-width: 100%;

  .loginLink {
    color: black;
    font-weight: bold;
  }

  .GettingStartedContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .GettingStartedImage {
    width: 100%; /* Make the image fill the container horizontally */
    height: 100%; /* Make the image fill the container vertically */
    object-fit: cover;
  }

  .GettingStartedImage img {
  }

  .ImageContainer {
    display: none;
  }

  .GSStepContainer {
    margin: 0 auto;

  }

  @media (min-width: 750px) {
    .ImageContainer {
      width: 50%;
      display: flex;
    }
  }

  @media (min-width: 1070px) {
    .GettingStartedContainer {
      max-height: 700px;
      overflow: hidden;
    }
    .GettingStartedImage {
      width: 100%; /* Make the image fill the container horizontally */
      height: 100%; /* Make the image fill the container vertically */
      object-fit: cover;
    }
    .ImageContainer {
      max-width: 50%;
    }
  }

  @media (min-width: 1500px) {
  }
`;
