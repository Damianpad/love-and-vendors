import { styled } from "styled-components";
import dancingCouple from "../../../assets/img/dancing_centerU.png";
// Create a GlobalStyles component to import and apply Google Fonts


export const HomeStyled = styled.div`
  width: 100%;
  color: black;

  .headerContainer {
    width: 100%;
    height: 100vh;
    background-image: url(${dancingCouple});
    background-repeat: no-repeat;
    background-position: center; 
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
