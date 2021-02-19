import "./Hero.scss";
import heroDisplay from "../../../../assets/hero-display.svg";

const ctaLink = "https://firemap.perchsensing.com";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="hero-info">
        <h1 className="title">
          Predict. Prevent. <em>Protect.</em>
        </h1>
        <p className="company-desc">
          We create tools that anticipate and stop wildfires. By improving
          visibility into regions with high fire risk using mesh sensor
          technology, Perch can warn authorities of dangerous situations before
          fires spread.
        </p>
        <button className="cta" onClick={() => window.open(ctaLink, "__blank")}>
          See how
        </button>
      </div>
      <img
        className="perch-line"
        src={heroDisplay}
        alt="Perch Sensor on a power line"
      />
    </section>
  );
}
