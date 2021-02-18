import "./HowItWorks.scss";

import { ReactComponent as Divider } from "../../../../assets/short-divider.svg";
import step1 from "../../../../assets/how-it-works/step-1.png";
import step2 from "../../../../assets/how-it-works/step-2.png";
import step3 from "../../../../assets/how-it-works/step-3.png";
import step4 from "../../../../assets/how-it-works/step-4.png";

const steps = [
  [step1, "An array of perch sensors are installed on power infrastructure"],
  [step2, "The sensors capture data about environmental conditions"],
  [
    step3,
    "Sensor feedback is processed to immediately identify abnormal behavior",
  ],
  [
    step4,
    "Warnings and threats appear in Perch GIS software where actions can be taken",
  ],
];

export default function HowItWorks() {
  return (
    <section className="HowItWorks">
      <Divider className="top-divider" />
      <h2>How it Works</h2>
      <ul className="step-list">
        {steps.map(([icon, text], i) => (
          <li key={i} className="step">
            <img src={icon} alt={"step " + i + 1} />
            <p>{text}</p>
          </li>
        ))}
      </ul>
      <Divider className="bottom-divider" />
    </section>
  );
}
