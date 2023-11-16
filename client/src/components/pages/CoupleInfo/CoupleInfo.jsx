import { Link } from "react-router-dom";
import GSStep from "../../GSStep/GSStep";
import { CoupleInfoStyles } from "./CoupleInfo.styled";

import GettingStartedImage from "../../GettingStartedImage/GettingStartedImage";

export default function CoupleInfo() {
  return (
    <CoupleInfoStyles>
      <GettingStartedImage />

      <section className="CoupleInfoContainer">
      <GSStep />
      <h1>Couple Info</h1>
      <Link to="/couple-finish">
        <button>Next</button>
      </Link>
      </section>

    </CoupleInfoStyles>
  );
}
