import { Link } from "react-router-dom";
import { UserRoleStyled } from "./UserRole.styled";

export default function UserRole() {
  return (
    <UserRoleStyled>
      <span>Are You a</span>
      <Link to="/couple-info">
        Couple
      </Link>
      <span>OR</span>
      <Link to="/vendor-info">
        Vendor
      </Link>
    </UserRoleStyled>
  );
}
