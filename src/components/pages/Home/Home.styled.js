import { styled } from "styled-components";
import dancingCouple from "../../../assets/img/dancing_centerU.png";

export const HomeStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@200;400;700&family=Playfair+Display&display=swap");

  width: 100%;
  color: black;

  .headerContainer {
    width: 100%;
    height: 100vh;
    background-image: url(${dancingCouple});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
  }

  .headerContainer::after {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.6) */
  }

  h2 {
    font-size: 40px;
    text-align: left;
    padding: 0 1.5em;
    font-family: "Lexend", sans-serif;
    font-weight: 200;
  }

  button {
    color: white;
  }

  .headerImg {
    width: 100%;
    object-fit: cover;
    height: 100vh;
  }

  .ctaImg {
    width: 100%;
    border-radius: 15px;
  }

  .discoverContainer {
    background: #fad7d7;
    padding: 1em;
  }

  .discoverHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 2em 2em 0 2em;
  }

  .discoverHeader img {
    width: 60%;
    height: 40vh;
    object-fit: cover;
  }

  .discoverHeader h2 {
    padding: 0.5em;
    width: 50%;
  }

  .discoverContainer h3 {
    font-size: 34px;
    text-align: left;
    width: 40%;
    padding: 1em;
    font-weight: 200;
    margin: 0;
  }

  .discoverContainer button {
    background: black;
    padding: 0.5em;
    font-size: 24px;
    width: 35%;
  }

  .vendorContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

  @media (max-width: 425px) {
    .discoverContainer h2 {
      font-size: 35px;
    }
    .discoverContainer button {
      width: 60%;
      color: white;
      margin: 1em;
    }
    .discoverContainer h3 {
      padding: 0.5em;
      font-size: 24px;
    }
  }
  @media (min-width: 1000px) {
    .finderContainer h2{
      font-size: 60px;
      width: 40%;
    }
    .vendorContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }

  @media (min-width: 1800px) {
    .finderContainer h2{
      font-size: 80px;
      width: 60%;
    }
  }
`;
