import "./Team.scss";

import richaProfile from "../../../../assets/profiles/richa.png";
import caitlinProfile from "../../../../assets/profiles/caitlin.png";
import brookeProfile from "../../../../assets/profiles/brooke.png";
import reedProfile from "../../../../assets/profiles/reed.png";
import emilProfile from "../../../../assets/profiles/emil.png";
import johnProfile from "../../../../assets/profiles/john.png";
import CJProfile from "../../../../assets/profiles/CJ.jpg";
import jessProfile from "../../../../assets/profiles/jess.jpg";

const profiles = [
  { name: "Emil Erickson", image: emilProfile, role: "CEO" },
  { name: "Richa Gadgil", image: richaProfile, role: "CDO" },
  { name: "CJ Gray", image: CJProfile, role: "Mechanical Engineer" },
  { name: "Caitlin Maltbie", image: caitlinProfile, role: "CMO" },
  { name: "Brooke Randolph", image: brookeProfile, role: "CFO" },
  { name: "Reed Slobodin", image: reedProfile, role: "CTO" },
  { name: "John Waidhofer", image: johnProfile, role: "CIO" },
  { name: "Jess Waidhofer", image: jessProfile, role: "Lead Designer" },
];

export default function Team() {
  return (
    <section className="Team">
      <h2>Meet the Team</h2>
      <div className="members">
        {profiles.map((profile) => (
          <MemberCard {...profile} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ name, image, role }) {
  return (
    <div className="MemberCard">
      <img src={image} alt={"Profile of " + name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
