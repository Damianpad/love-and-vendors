import { Link } from "react-router-dom";
import { NavigationStyled } from "./Navigation.styled";

export default function Navigation() {
  return (
    <NavigationStyled>
      <nav>
        <Link to={"/"}>Love & Vendors</Link>
        <Link to={"/getting-started"}>Getting Started</Link>
        <Link to={"/login"}>Log in</Link>
      </nav>
    </NavigationStyled>
  );
}
