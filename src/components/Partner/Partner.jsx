import "./Partner.scss";
import partnerUtilities from "../../assets/partner-with-us.svg";
import partnerCommunity from "../../assets/partnerC.svg"
import partnerGeneral from "../../assets/partnerG.svg"
import { Link } from "react-router-dom";

function getImage(type) {
  if (type === "g") {
     return partnerGeneral
  } else if (type === "c") {
    return partnerCommunity
  } else if (type === "u") {
    return partnerUtilities
  } else{
    return partnerGeneral
  }
}

export default function Partner(props) {
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
        src={getImage(props.audience)}
        alt="Forest alerts"
        loading="lazy"
      />
    </section>
  );
}
