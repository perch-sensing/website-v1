import "./Partner.scss";
import partnerDisplay from "../../assets/alerts.png";
import { Link } from "react-router-dom";

export default function Partner() {
  return (
    <section className="Partner">
      <div className="partner-info">
        <h2>Partner With Us</h2>
        <p>
          We are actively researching new methods of wildfire detection, fire
          simulation, and threat classification through machine learning. If you
          are currently working to stop wildfires, we would be happy to help
          your endeavors.
        </p>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <button>Contact Us</button>
        </Link>
      </div>
      <img
        className="partner-display"
        src={partnerDisplay}
        alt="Forest alerts"
        loading="lazy"
      />
    </section>
  );
}
