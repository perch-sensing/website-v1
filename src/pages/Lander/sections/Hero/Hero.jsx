import "./Hero.scss";
import heroDisplay from "../../../../assets/hero-display.svg";
import companyTitle from "../../../../assets/logo-text.svg";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="hero-info">
        <h1>
          <img src={companyTitle} alt="Perch Sensing" />
          Predict, Prevent, and Protect
        </h1>
        <p>
          We create tools that anticipate and stop wildfires. By improving
          visibility into regions with high fire risk using mesh sensor
          technology, Perch can warn authorities of dangerous situations before
          fires spread.
        </p>
        <button>Learn More</button>
      </div>
      <img src={heroDisplay} alt="Perch Sensor on a power line" />
    </section>
  );
}
