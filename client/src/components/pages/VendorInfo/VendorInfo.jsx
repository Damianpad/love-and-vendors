import { Link } from "react-router-dom";
import GSStep from "../../GSStep/GSStep";
import { VendorInfoStyled } from "./VendorInfo.styled";
import VendorInfoForm from "../../VendorInfoForm/VendorInfoForm";
import GettingStartedImage from "../../GettingStartedImage/GettingStartedImage";

export default function VendorInfo() {
  return (
    <VendorInfoStyled>
      <GettingStartedImage />
      <GSStep />
      <h2>Welcome Vendor! Let's get some more information about you</h2>

      <VendorInfoForm />
      
      
    </VendorInfoStyled>
  );
}
