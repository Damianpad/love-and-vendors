import { Link } from "react-router-dom";
import { UserRoleStyled } from "./UserRole.styled";

export default function UserRole() {
  return (
    <UserRoleStyled>
      <span>Are You a</span>
      <Link to="/couple-info">
        <button>Couple</button>
      </Link>
      <Link to="/vendor-info">
        <button>Vendor</button>
      </Link>
    </UserRoleStyled>
  );
}
