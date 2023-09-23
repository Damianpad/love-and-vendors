import { Link } from "react-router-dom";
import { NavigationStyled } from "./Navigation.styled";

export default function Navigation() {
  return (
    <NavigationStyled>
      <nav>
        <Link to={"/"} className="logo">Love & Vendors</Link>
        <section className="btnContainer">
        <Link to={"/getting-started"} className="getStartedBtn">Getting Started</Link>
        <Link to={"/login"} className="loginBtn">Log in</Link>
        </section>

      </nav>
    </NavigationStyled>
  );
}
