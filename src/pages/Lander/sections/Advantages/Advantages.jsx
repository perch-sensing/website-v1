import "./Advantages.scss";

import advantagesGeneral from "../../../../assets/advantagesG.svg";
import advantagesUtilities from "../../../../assets/advantagesU.svg";
import advantagesCommunities from "../../../../assets/advantagesC.svg";

const advantagesC = [
  {
    title: "Precision",
    text: "High quality sensors deployed in the community allow for rapid and accurate prediction and feedback.",
  },
  {
    title: "Scalability",
    text: "With automated data analytics and a low infrastructure footprint, the Perch sensing system maintains easy management with mass scaling",
  },
  {
    title: "Integration",
    text: "Perch sensors can be placed on existing fences, trees, or buildings, simplifying the accessibility of hardware and significantly reducing overall costs.",
  },
];

const advantagesU = [
  {
    title: "Precision",
    text: "High-grade sensors can provide advanced insights into transmission and distribution equipment such as fine-grained real-time load monitoring and quantitative data for not-at-fault-claims.",
  },
  {
    title: "Scalability",
    text: "Perch's high-grade and cost-efficient sensors are designed to be capex friendly. Coupled with advanced operator software, the sensor fleet is easy to manage at any size.",
  },
  {
    title: "Integration",
    text: "Perch Sensing equipment works cohesively with existing transmission and distribution infrastructure, and requires minimal infrastructure investment.",
  },
];

const advantagesG = [
  {
    title: "Precision",
    text: "High-quality sensors deployed in the field provides rapid feedback about subtle environmental changes.",
  },
  {
    title: "Scalability",
    text: "With automated data analysis, the Perch system continues to be manageable as the sensor fleet grows.",
  },
  {
    title: "Integration",
    text: "Perch sensors work with pre-existing infrastructure, providing diagnostic information about the safety of assets.",
  },
];

function getText(type) {
  switch (type) {
    case "g":
      return advantagesG;
    case "c":
      return advantagesC;
    case "u":
      return advantagesU;
    default:
      return advantagesG;
  }
}

function getImage(type) {
  switch (type) {
    case "g":
      return advantagesGeneral;
    case "c":
      return advantagesCommunities;
    case "u":
      return advantagesUtilities;
    default:
      return advantagesGeneral;
  }
}

export default function Advantages(props) {
  return (
    <section className="Advantages">
      <h2>Advantages</h2>
      <ul className="advantage-cards">
        {getText(props.audience).map((advantage) => (
          <AdvantageCard key={advantage.title} {...advantage} />
        ))}
      </ul>
      <img
        className="advantages-display"
        src={getImage(props.audience)}
        alt="mountain transmission lines"
      />
    </section>
  );
}

function AdvantageCard({ title, text }) {
  return (
    <li className="AdvantageCard">
      <h3 className="title">{title}</h3>
      <p>{text}</p>
    </li>
  );
}
