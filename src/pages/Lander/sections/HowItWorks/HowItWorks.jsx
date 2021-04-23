import "./HowItWorks.scss";
import howItWorksGraphic from "../../../../assets/how-it-works.svg";

const steps = [
  "An array of Perch Sensors are installed on power infrastructure",
  "The sensors capture data about environmental conditions",
  "Sensor feedback is processed to immediately identify abnormal behavior",
  "Warnings and threats appear in Perch GIS software where actions can be taken",
];

export default function HowItWorks() {
  return (
    <section className="HowItWorks">
      <h2>How it Works</h2>
      <img
        src={howItWorksGraphic}
        alt="Perch Sensenet infographic"
        className="graphic"
      />
      <ol className="step-list">
        {steps.map((step, i) => (
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
