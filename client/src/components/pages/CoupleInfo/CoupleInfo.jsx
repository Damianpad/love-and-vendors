import { Link } from "react-router-dom";
import GSStep from "../../GSStep/GSStep";
import { CoupleInfoStyles } from "./CoupleInfo.styled";

export default function CoupleInfo() {
  return (
    <CoupleInfoStyles >
      <GSStep />
      <h1>Couple Info</h1>
      <Link to="/couple-finish">
        <button>Next</button>
      </Link>
    </CoupleInfoStyles >
  );
}
