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
          <h2>Welcome to Love & Vendors! Let's get you to the right place.</h2>
          <UserRole />
          
          <span>
            Already have an account?
            <Link>Login</Link>
          </span>
        </section>
      </section>
    </GettingStartedStyles>
  );
}
