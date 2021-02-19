import "./Team.scss";

import richaProfile from "../../../../assets/profiles/richa.png";
import caitlinProfile from "../../../../assets/profiles/caitlin.png";
import brookeProfile from "../../../../assets/profiles/brooke.png";
import reedProfile from "../../../../assets/profiles/reed.png";
import emilProfile from "../../../../assets/profiles/emil.png";
import johnProfile from "../../../../assets/profiles/john.png";

const profiles = [
  { name: "Richa Gadgil", image: richaProfile, role: "CDO" },
  { name: "Caitlin Maltbie", image: caitlinProfile, role: "CFO" },
  { name: "Brooke Randolph", image: brookeProfile, role: "CFO" },
  { name: "Reed Slobodin", image: reedProfile, role: "CTO" },
  { name: "Emil Erikson", image: emilProfile, role: "CEO" },
  { name: "John Waidhofer", image: johnProfile, role: "CIO" },
];

export default function Team() {
  return (
    <section className="Team">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        <ul className="team-group">
          {profiles.slice(0, 2).map((person) => (
            <Profile {...person} />
          ))}
        </ul>
        <ul className="team-group">
          {profiles.slice(2, 4).map((person) => (
            <Profile {...person} />
          ))}
        </ul>
        <ul className="team-group">
          {profiles.slice(4, 6).map((person) => (
            <Profile {...person} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Profile({ name, image, role }) {
  return (
    <li className="Profile">
      <img src={image} alt="Profile" />
      <div className="info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </li>
  );
}
