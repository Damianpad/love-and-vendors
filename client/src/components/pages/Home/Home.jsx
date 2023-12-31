import { Container } from "../../styles/Container.styled";
import { HomeStyled } from "./Home.styled";
import DynamicHeading from "../../DynamicHeading/DynamicHeading";
import Vendor from "../../Vendor/Vendor";
import Videographer from "../../../assets/img/LV_videographer.jpg"
import Photographer from "../../../assets/img/LV_photographer.jpg"
import Venues from "../../../assets/img/LV_venues.jpg"
import DiscoverImage from "../../../assets/img/LV_1.jpg"

export default function Home() {
  return (
    <HomeStyled>

      <section className="headerContainer">
        <DynamicHeading />
      </section>

      <section className="finderContainer">
        <h2>Finding what you need all in one place</h2>
        <button>Find More</button>
      </section>

      <section className="vendorContainer">
        <Vendor type="Videographer" img={Videographer}/>
        <Vendor type="Photographer" img={Photographer}/>
        <Vendor type="Venues" img={Venues}/>
      </section>

      <section className="discoverContainer">
        <section className="discoverHeader">
        <img src={DiscoverImage} alt="" className="ctaImg" />
        <h2>Discover the best in your area</h2>
        </section>

        <h3>Find the perfect vendor for your day.</h3>
        <button>Get Started</button>
      </section>

    </HomeStyled>
  );
}
