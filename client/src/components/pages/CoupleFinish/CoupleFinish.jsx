import GSStep from "../../GSStep/GSStep";
import { CoupleFinishStyles } from "./CoupleFinish.styled";
import GettingStartedImage from "../../GettingStartedImage/GettingStartedImage";

export default function CoupleFinish() {
  return (
    <CoupleFinishStyles>
      < GettingStartedImage />
      <GSStep />
      <h1>Couple Info</h1>
    </CoupleFinishStyles>
  );
}
