import "./Advantages.scss";

import advantagesDisplay from "../../../../assets/wide-mountains.svg";

const advantages = [
  {
    title: "Precision",
    text:
      "High quality sensor units deployed in the field allow teams to react quickly to subtle environmental changes",
  },
  {
    title: "Scalability",
    text:
      "With automated GIS pipelines and analysis, the Perch system continues to be manageable as the sensor fleet grows.",
  },
  {
    title: "Integration",
    text:
      "Perch sensors work with pre-existing infrastructure, providing diagnostic information about the safety of assets.",
  },
];

export default function Advantages() {
  return (
    <section className="Advantages">
      <h2>Advantages</h2>
      <ul className="advantage-cards">
        {advantages.map((advantage) => (
          <AdvantageCard key={advantage.title} {...advantage} />
        ))}
      </ul>
      <img
        className="advantages-display"
        src={advantagesDisplay}
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
