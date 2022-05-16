import "./Hero.scss";
import { useHistory } from "react-router-dom";
import heroDisplay from "../../../../assets/hero-display.svg";
import bannerG from "../../../../assets/bannerG.svg";
import bannerC from "../../../../assets/bannerC.svg";
// import cpcie from "../../../../assets/cpcieSquare.png";
// import iq from "../../../../assets/iq.png";
// import vw from "../../../../assets/ventureWell.png";
// import nsf from "../../../../assets/icorps.png";
import PartnerCard from "../../PartnerCard";

const companyDescGC = `We create tools that anticipate and stop wildfires. By improving \n 
  visibility into regions with high fire risk using mesh sensor \n
  technology, Perch can warn authorities of dangerous situations before \n
  fires spread.`;
const companyDescU = `We provide utility companies with the intelligence \n 
  required to quickly respond to impactful threats on their infrastructure greatly \n
  reducing unwarranted operational expenditures and promoting safe and resilient electric \n
  power delivery for consumers.`;

// const partners = [
//   {
//     name: "VentureWell",
//     image: vw,
//     website: "https://venturewell.org/",
//   },
//   {
//     name: "Innovation Quest",
//     image: iq,
//     website: "https://cie.calpoly.edu/prepare/innovation-quest/",
//   },
//   {
//     name: "Cal Poly Accelerator Program",
//     image: cpcie,
//     website: "https://cie.calpoly.edu/launch/accelerator/",
//   },
//   {
//     name: "NSF Innovation Corps",
//     image: nsf,
//     website: "https://www.nsf.gov/news/special_reports/i-corps/",
//   },
// ];

export default function Hero(props) {
  let history = useHistory();

  const redirectCommunities = () => {
    history.push("/communities");
  };

  const redirectGeneral = () => {
    history.push("/");
  };

  const redirectUtilities = () => {
    history.push("/utilities");
  };

  let buttonGen = (
    <button
      onClick={redirectGeneral}
      style={{ paddingLeft: "12%", paddingRight: "12%", marginLeft: "3%" }}
    >
      {" "}
      General Edition{" "}
    </button>
  );
  let buttonCom = (
    <button onClick={redirectCommunities} style={{ marginLeft: "3%" }}>
      {" "}
      Community Edition{" "}
    </button>
  );
  let buttonUtil = (
    <button
      onClick={redirectUtilities}
      style={{ paddingLeft: "13%", paddingRight: "13%", marginLeft: "3%" }}
    >
      {" "}
      Utility Edition{" "}
    </button>
  );

  let left;
  let right;

  if (props.audience === "g") {
    left = buttonCom;
    right = buttonUtil;
  } else if (props.audience === "c") {
    left = buttonGen;
    right = buttonUtil;
  } else if (props.audience === "u") {
    left = buttonGen;
    right = buttonCom;
  }

  function getImage(type) {
    switch (type) {
      case "g":
        return bannerG;
      case "c":
        return bannerC;
      case "u":
        return heroDisplay;
      default:
        return heroDisplay;
    }
  }

  function getDesc(type) {
    switch (type) {
      case "g":
        return companyDescGC;
      case "c":
        return companyDescGC;
      case "u":
        return companyDescU;
      default:
        return companyDescGC;
    }
  }

  return (
    <section className="Hero">
      <div className="hero-info">
        <h1 className="title">
          Predict. Prevent.&nbsp;<em> Protect.</em>
        </h1>
        <p className="company-desc">{getDesc(props.audience)}</p>
        <div className="editionBox">
          <p className="buttonText">
            {" "}
            For a more personalized experience, please select the most
            appropriate user type.{" "}
          </p>
          <div className="editionButtons">
            {left}
            {right}
          </div>
        </div>
      </div>
      <img
        className="perch-line"
        src={getImage(props.audience)}
        alt="Perch Sensor on a power line"
      />
      {/* <h3 className="sponsorHeader">Thank You To Our Supporters</h3>
      <div>
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
      </div> */}
    </section>
  );
}
