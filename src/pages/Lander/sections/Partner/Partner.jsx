import "./Partner.scss";

import partnerDisplay from "../../../../assets/alerts.png";

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
        <button>Contact Us</button>
      </div>
      <img
        className="partner-display"
        src={partnerDisplay}
        alt="Forest alerts"
      />
    </section>
  );
}
