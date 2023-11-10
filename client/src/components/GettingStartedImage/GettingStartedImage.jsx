import { GettingStartedImageStyles } from "./GettingStartedImage.styled";
import GSImage from "../../assets/img/LV_GettingStarted_Img.jpg";

export default function GettingStartedImage() {
  return (
    <GettingStartedImageStyles>
      <section className="ImageContainer">
        <img src={GSImage} alt="My Image" className="GettingStartedImage" />
      </section>
    </GettingStartedImageStyles>
  );
}
