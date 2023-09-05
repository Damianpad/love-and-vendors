import { Container } from "../../styles/Container.styled";

export default function Home() {
  return (
    <>
      <Container>
        <span>Navigation</span>
        <button>Log in</button>
      </Container>

      <img src="src\assets\img\dancing_centerU.png" alt="" />
      <h1>Home Page</h1>

      <section>
        <h2>Finding what you need all in one place</h2>
        <button>Find More</button>
      </section>

      <section>
        <span>Videographer Vendor</span>
        <span>Photographer Vendor</span>
        <span>Venues Vendor</span>
      </section>

      <section>
        <img src="src\assets\img\LV_1.jpg" alt="" />
        <h2>Discover the best in your area</h2>
        <h3>Find the perfect vendor for your day.</h3>
        <button>Get Started</button>
      </section>

      <section>
        <span>Footer Component</span>
      </section>
    </>
  );
}
