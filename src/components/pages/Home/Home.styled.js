import { styled } from "styled-components";
import dancingCouple from "../../../assets/img/dancing_centerU.png";


export const HomeStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;400;700&family=Playfair+Display&display=swap');

  width: 100%;
  color: black;

  .headerContainer {
    width: 100%;
    height: 100vh;
    background-image: url(${dancingCouple});
    background-repeat: no-repeat;
    background-position: center; 
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
    font-family: 'Lexend', sans-serif;
    font-weight: 200;
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
`;
