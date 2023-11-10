import { Link } from "react-router-dom";
import StartedImage from "../../StartedImage/StartedImage";
import { GettingStartedStyles } from "./GettingStarted.styled";
import GSStep from "../../GSStep/GSStep";
import UserRole from "../../UserRole/UserRole.jsx";
// import GettingStartedImage from "../../../assets/img/LV_GettingStarted_Img.jpg";

import GettingStartedImage from "../../GettingStartedImage/GettingStartedImage.jsx";

export default function GettingStarted() {
  return (
    <GettingStartedStyles>
      <section className="GettingStartedContainer">

        {/* <section className="ImageContainer">
          <img
            src={GettingStartedImage}
            alt="My Image"
            className="GettingStartedImage"
          />
        </section> */}

        <GettingStartedImage />

        <section className="GSStepContainer">
          <GSStep />
          <UserRole />
          <span>
            Already have an account?
            <Link className="loginLink"> Log in</Link>
          </span>
        </section>

      </section>
    </GettingStartedStyles>
  );
}
