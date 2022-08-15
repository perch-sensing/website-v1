import "./Partner.scss";
import partnerUtilities from "../../assets/partner-with-us.svg";
import partnerCommunity from "../../assets/partnerC.svg";
import partnerGeneral from "../../assets/partnerG.svg";
import { Link } from "react-router-dom";
import cpcie from "../../assets/cpcieSquare.png";
import iq from "../../assets/iq.png";
import vw from "../../assets/ventureWell.png";
import nsf from "../../assets/icorps.png";
import PartnerCard from "../../pages/Lander/PartnerCard";
import calseed from "../../assets/calseed_logo.png";

function getImage(type) {
  if (type === "g") {
    return partnerGeneral;
  } else if (type === "c") {
    return partnerCommunity;
  } else if (type === "u") {
    return partnerUtilities;
  } else {
    return partnerGeneral;
  }
}

const partners = [
  {
    name: "VentureWell",
    image: vw,
    website: "https://venturewell.org/",
  },
  {
    name: "Innovation Quest",
    image: iq,
    website: "https://cie.calpoly.edu/prepare/innovation-quest/",
  },
  {
    name: "Cal Poly Accelerator Program",
    image: cpcie,
    website: "https://cie.calpoly.edu/launch/accelerator/",
  },
  {
    name: "NSF Innovation Corps",
    image: nsf,
    website: "https://www.nsf.gov/news/special_reports/i-corps/",
  },
  {
    name: "CalSEED",
    image: calseed,
    website: "https://calseed.fund/",
  },
];

export default function Partner(props) {
  return (
    <div>
      <section className="Partner">
        <div className="partnerCore">
          <div className="partner-info">
            <h2>Partner With Us</h2>
            <p>
              We are actively researching new methods of wildfire detection,
              fire simulation, and threat classification through machine
              learning. If you are currently working to stop wildfires, we would
              be happy to help your endeavors.
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
        </div>
        <h3 className="sponsorHeader">
          Perch Sensing Research and Development is supported by
        </h3>
        <div className="memberArea">
          <div className="partners">
            {partners.map((profile) => (
              <PartnerCard
                name={profile.name}
                website={profile.website}
                image={profile.image}
                key={profile.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
