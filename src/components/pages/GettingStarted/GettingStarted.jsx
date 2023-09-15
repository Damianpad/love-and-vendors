import { Link } from "react-router-dom";
import StartedImage from "../../StartedImage/StartedImage";
import { GettingStartedStyles } from "./GettingStarted.styled";
import GSStep from "../../GSStep/GSStep";
import UserRole from "../../UserRole/UserRole.jsx";

export default function GettingStarted() {
  return (
    <GettingStartedStyles>
      <section>
        <section>{/* <StartedImage /> */}</section>
        <section>
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
