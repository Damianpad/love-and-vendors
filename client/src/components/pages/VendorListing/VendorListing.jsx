import { VendorListingStyled } from "./VendorListing.styled";
import CoverPhoto from "../../../assets/img/LV_1.jpg";
import Line from "../../Line/Line";

export default function VendorListing() {
  return (
    <VendorListingStyled>
      <section className="CoverPhotoContainer">
        <img src={CoverPhoto} alt="" />
      </section>

      <section className="VendorNameContainer">
        <h2>Parallax Films</h2>
        <h3>Videographer base in Lewisville, TX</h3>
      </section>

      <Line />
      <section>
        <h2>Services Offered</h2>
      </section>

      <section>
        <h2>About Section</h2>

        <section>
          <img src="" alt="" />

          <p>Business Bio</p>
        </section>

        <section>
          <h3>Social Links Component</h3>
        </section>

        <section>
          <h2>Examples of Work</h2>
        </section>
      </section>
    </VendorListingStyled>
  );
}
