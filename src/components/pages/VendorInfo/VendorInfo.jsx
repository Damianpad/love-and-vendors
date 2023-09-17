import { Link } from "react-router-dom";
import GSStep from "../../GSStep/GSStep";
import { VendorInfoStyled } from "./VendorInfo.styled";
import VendorInfoForm from "../../VendorInfoForm/VendorInfoForm";

export default function VendorInfo() {
  return (
    <VendorInfoStyled>
      <GSStep />
      <h2>Welcome Vendor! Let's get some more information about you</h2>

      <VendorInfoForm />
      
      
    </VendorInfoStyled>
  );
}
