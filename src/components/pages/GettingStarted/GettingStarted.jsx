import { Link } from "react-router-dom";
import StartedImage from "../../StartedImage/StartedImage";
import { GettingStartedStyles } from "./GettingStarted.styled";
import GSStep from "../../GSStep/GSStep";

export default function GettingStarted() {
  return (
    <GettingStartedStyles>
      <section>
        <section>
          {/* <StartedImage /> */}
        </section>
        <section>
          <GSStep />
          <h2>Welcome to Love & Vendors! Let's get you to the right place.</h2>
          <span>Getting Started Component</span>
          <Link to="/couple-info">
            <button>Next</button>
          </Link>

          <span>
            Already have an account?
            <a href="">Log in</a>
          </span>
        </section>
      </section>
    </GettingStartedStyles>
  );
}
