import "./Team.scss";

import Advisors from "../Advisors/Advisors";

import richaProfile from "../../../../assets/profiles/richa.png";
import caitlinProfile from "../../../../assets/profiles/caitlin.png";
import brookeProfile from "../../../../assets/profiles/brooke.png";
import reedProfile from "../../../../assets/profiles/reed.png";
import emilProfile from "../../../../assets/profiles/emil.png";
import johnProfile from "../../../../assets/profiles/john.jpeg";
import dominicProfile from "../../../../assets/profiles/dominic.jpeg";
import CJProfile from "../../../../assets/profiles/CJ.jpg";
import jeniProfile from "../../../../assets/profiles/jeni.jpeg";
import janineProfile from "../../../../assets/profiles/janine.jpeg";
import nickProfile from "../../../../assets/profiles/nick.jpeg";
import jessProfile from "../../../../assets/profiles/jess.jpg";

const profiles = [
  { name: "Emil Erickson", image: emilProfile, role: "CEO" },
  { name: "Caitlin Maltbie", image: caitlinProfile, role: "CMO" },
  { name: "Brooke Randolph", image: brookeProfile, role: "COO" },
  { name: "Dominic Gaiero", image: dominicProfile, role: "CTO" },
  { name: "John Waidhofer", image: johnProfile, role: "CIO" },
  { name: "Richa Gadgil", image: richaProfile, role: "CDO" },
  { name: "Jeni Kawate", image: jeniProfile, role: "Electrical Engineer" },
  { name: "Janine Darato", image: janineProfile, role: "Electrical Engineer" },
  { name: "Nick Marta", image: nickProfile, role: "Electrical Engineer" },
  { name: "Reed Slobodin", image: reedProfile, role: "Electrical Engineer" },
  { name: "CJ Gray", image: CJProfile, role: "Mechanical Engineer" },
  { name: "Jess Waidhofer", image: jessProfile, role: "Lead Designer" },
];

export default function Team() {
  return (
    <section className="Team">
      <h2>Meet the Team</h2>
      <div className="members">
        {profiles.map((profile) => (
          <MemberCard {...profile} key={profile.name} />
        ))}
      </div>
      <Advisors />
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
