import "./HowItWorks.scss";
import gHow from "../../../../assets/gHow.svg";
import uHow from "../../../../assets/uHow.svg";
import cHow from "../../../../assets/cHow.svg";

const stepsU = [
  "A collection of Perch Sensors are installed on power infrastructure",
  "The sensors capture environmental data",
  "The sensors process data and immediately identify abnormal behavior",
  "Warnings and threats appear in Perch GIS software, so actions can be taken",
];

const stepsG = [
  "A collection of Perch Sensors are installed on existing infrastructure",
  "The sensors capture data about environmental conditions",
  "The sensors process data and immediately identify abnormal behavior",
  "Warnings and threats appear in Perch GIS software, so actions can be taken",
];

const stepsC = [
  "A collection of Perch Sensors are installed, surrounding the community",
  "The sensors capture informatoion on environmental conditions",
  "The sensors process data and immediately identify abnormal behavior",
  "Perch notifies the community of any warnings and threats",
];

function getSteps(type) {
  switch (type) {
    case "g":
      return stepsG;
    case "c":
      return stepsC;
    case "u":
      return stepsU;
    default:
      return stepsG;
  }
}

function getImage(type) {
  switch (type) {
    case "g":
      return gHow;
    case "c":
      return cHow;
    case "u":
      return uHow;
    default:
      return gHow;
  }
}

export default function HowItWorks(props) {
  return (
    <section className="HowItWorks">
      <h2>How it Works</h2>
      <img
        src={getImage(props.audience)}
        alt="Perch Sensenet infographic"
        className="graphic"
      />
      <ol className="step-list">
        {getSteps(props.audience).map((step, i) => (
          <ProcessStep number={i + 1} description={step} key={i} />
        ))}
      </ol>
    </section>
  );
}

function ProcessStep({ number, description }) {
  return (
    <li className="ProcessStep">
      <em className="number">{number}</em>
      <p>{description}</p>
    </li>
  );
}
