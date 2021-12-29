import "./Advantages.scss";

import advantagesGeneral from "../../../../assets/advantagesG.svg";
import advantagesUtilities from "../../../../assets/AdvantagesU.svg";
import advantagesCommunities from "../../../../assets/AdvantagesC.svg";

const advantagesC = [
  {
    title: "Precision",
    text: "High quality sensor units deployed in the field allow authorities to react quickly to subtle environmental changes",
  },
  {
    title: "Scalability",
    text: "With automated data analysis, the Perch system continues to be manageable as the sensor fleet grows.",
  },
  {
    title: "Integration",
    text: "Perch sensors work with pre-existing infrastructure, such as fencing, buildings, or trees, providing diagnostic information about the safety of assets.",
  },
];

const advantagesU = [
  {
    title: "Precision",
    text: "High quality sensor units deployed on powerlines allow teams to react quickly to subtle environmental changes",
  },
  {
    title: "Scalability",
    text: "With automated GIS pipelines and analysis, the Perch system continues to be manageable as the sensor fleet grows.",
  },
  {
    title: "Integration",
    text: "Perch sensors work with pre-existing infrastructure, such as powerlines, providing diagnostic information about the safety of assets.",
  },
];

const advantagesG = [
  {
    title: "Precision",
    text: "High quality sensor units deployed in the field allow teams to react quickly to subtle environmental changes",
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
