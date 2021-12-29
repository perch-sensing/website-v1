import "./Hero.scss";
import { useHistory } from "react-router-dom";
import heroDisplay from "../../../../assets/hero-display.svg";
import bannerG from "../../../../assets/bannerG.svg";
import bannerC from "../../../../assets/bannerC.svg";

const companyDescGC = `We create tools that anticipate and stop wildfires. By improving \n 
  visibility into regions with high fire risk using mesh sensor \n
  technology, Perch can warn authorities of dangerous situations before \n
  fires spread.`;
const companyDescU = `We provide utility companies with the situational \n
and actionable intelligence required to quickly \n
respond to threats on or around their power \n
distribution and transmission infrastructure \n
using innovative sensing techniques to lower \n
capital and operational expenditures allowing \n
for safer, more resilient, and more affordable \n
electric rates for ratepayers.`;

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

  let buttonGen = <button onClick={redirectGeneral}> General Edition </button>;
  let buttonCom = (
    <button onClick={redirectCommunities}> Community Edition </button>
  );
  let buttonUtil = (
    <button onClick={redirectUtilities}> Utility Edition </button>
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
    </section>
  );
}
