import "./Hero.scss";
import { useHistory } from 'react-router-dom';
import heroDisplay from "../../../../assets/hero-display.svg";

const ctaLink = "https://firemap.perchsensing.com";


export default function Hero(props) {
  let history = useHistory();

  const redirectCommunities = () => {
    history.push('/communities')
  }

  const redirectGeneral  = () => {
    history.push('/')
  }

  const redirectUtilities  = () => {
    history.push('/utilities')
  }

  let buttonGen = <button className="cta" onClick={redirectGeneral}> General Edition </button>;
  let buttonCom = <button className="cta" onClick={redirectCommunities}> Community Edition </button>;
  let buttonUtil = <button className="cta" onClick={redirectUtilities}> Utility Edition </button>;

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


  return (
    <section className="Hero">
      <div className="hero-info">
        <h1 className="title">
          Predict. Prevent. <em> Protect.</em>
        </h1>
        <p className="company-desc">
        We create tools that anticipate and stop wildfires. 
        By improving visibility into regions with high fire 
        risk using mesh sensor technology, Perch can warn 
        authorities of dangerous situations before fires spread.
        </p>
        < div className="editionButtons">
        {left} {right}
        </div>
      </div>
      <img
        className="perch-line"
        src={heroDisplay}
        alt="Perch Sensor on a power line"
      />
    </section>
  );
}
