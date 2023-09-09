import { Container } from "../../styles/Container.styled";
import { HomeStyled } from "./Home.styled";
import DynamicHeading from "../../DynamicHeading/DynamicHeading";
import Vendor from "../../Vendor/Vendor";
import Videographer from "../../../assets/img/LV_videographer.jpg"
import Photographer from "../../../assets/img/LV_photographer.jpg"
import Venues from "../../../assets/img/LV_venues.jpg"

export default function Home() {
  return (
    <HomeStyled>

      <section className="headerContainer">
        <DynamicHeading />
      </section>

      <section>
        <h2>Finding what you need all in one place</h2>
        <button>Find More</button>
      </section>

      <section>
        <Vendor type="Videographer" img={Videographer}/>
        <Vendor type="Photographer" img={Photographer}/>
        <Vendor type="Venues" img={Venues}/>
      </section>

      <section>
        <img src="src\assets\img\LV_1.jpg" alt="" className="ctaImg" />
        <h2>Discover the best in your area</h2>
        <h3>Find the perfect vendor for your day.</h3>
        <button>Get Started</button>
      </section>

      <section>
        <span>Footer Component</span>
      </section>
    </HomeStyled>
  );
}
