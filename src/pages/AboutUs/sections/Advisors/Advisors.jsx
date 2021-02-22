import "./Advisors.scss";

import taufikProfile from "../../../../assets/profiles/taufik.jpg";
import josephProfile from "../../../../assets/profiles/joseph.jpg";
import majidProfile from "../../../../assets/profiles/majid.jpg";
const advisors = [
  { name: "Taufik", role: "EE Professor at Cal Poly", image: taufikProfile },
  {
    name: "Joseph Callenes-Sloan",
    role: "EE Professor at Cal Poly",
    image: josephProfile,
  },
  {
    name: "Majid Poshtan",
    role: "EE Professor at Cal Poly",
    image: majidProfile,
  },
];

export default function Advisors() {
  return (
    <section className="Advisors">
      <h2>Advisors</h2>
      <ul className="advisor-list">
        {advisors.map((advisor) => (
          <AdvisorProfile {...advisor} key={advisor.name} />
        ))}
      </ul>
    </section>
  );
}

function AdvisorProfile({ image, name }) {
  return (
    <li className="AdvisorProfile">
      <img src={image} alt={`profile for ${name}`} />
      <h3>{name}</h3>
    </li>
  );
}
