import { Link } from "react-router-dom";
import { VendorStyled } from "./Vendor.styled";

export default function Vendor(props) {
  const containerImage = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "90%",
    height: "400px",
    margin: "1em auto",
    position: "relative",
  };

  return (
    <VendorStyled style={containerImage}>
      <section className="overlay">
        <nav>
          <Link className="vendorType">{props.type}</Link>
        </nav>
      </section>
    </VendorStyled>
  );
}
