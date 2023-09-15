import { Link } from "react-router-dom";
import { UserRoleStyled } from "./UserRole.styled";

export default function UserRole() {
  return (
    <UserRoleStyled>
      <h2>Welcome to Love & Vendors! Let's get you to the right place.</h2>
      <span>Are you a</span>
      <Link to="/couple-info">Couple</Link>
      <Link to="/vendor-info">Vendor</Link>
    </UserRoleStyled>
  );
}
