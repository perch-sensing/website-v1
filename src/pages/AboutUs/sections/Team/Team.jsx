import "./Team.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { SocialIcon } from "react-social-icons";
import PartnerCard from "../../../Lander/PartnerCard";

import brookeProfile from "../../../../assets/profiles/brooke.png";
import dominicProfile from "../../../../assets/profiles/dominic.jpeg";
import nathanProfile from "../../../../assets/profiles/nathan.jpeg";
import mckennaProfile from "../../../../assets/profiles/mckenna.jpeg";
import taufikProfile from "../../../../assets/profiles/taufik.jpg";
import josephProfile from "../../../../assets/profiles/joseph.jpg";
import majidProfile from "../../../../assets/profiles/majid.jpg";

// import cpcie from "../../../../assets/cpcieSquare.png";
// import iq from "../../../../assets/iq.png";
// import vw from "../../../../assets/ventureWell.png";
// import nsf from "../../../../assets/icorps.png";

const activeTeam = [
  {
    name: "Brooke Randolph",
    image: brookeProfile,
    role: "CEO",
    linkedIn: "https://www.linkedin.com/in/brookerandolph/",
  },
  {
    name: "Nathan Wang",
    image: nathanProfile,
    role: "COO/CFO",
    linkedIn: "https://www.linkedin.com/in/nathandwang/",
  },
  {
    name: "Dominic Gaiero",
    image: dominicProfile,
    role: "CTO",
    linkedIn: "https://www.linkedin.com/in/dgaiero/",
  },
  {
    name: "McKenna Reed",
    image: mckennaProfile,
    role: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/mreed12/",
  },
];

const advisingTeam = [
  {
    name: "Majid Poshtan",
    image: majidProfile,
    role: "Advisor",
    linkedIn: "https://www.linkedin.com/in/majid-poshtan-68627348/",
  },
  {
    name: "Joseph Callenes-Sloan",
    image: josephProfile,
    role: "Advisor",
    linkedIn: "https://www.linkedin.com/in/joseph-callenes-sloan-57882220/",
  },
  {
    name: "Taufik",
    role: "Advisor",
    image: taufikProfile,
    linkedIn: "https://www.linkedin.com/in/taufik/",
  },
];

export default function currentTeam() {
  return (
    <div>
      <section className="Team">
        <h2>Meet the Team</h2>
        <div className="memberArea">
          <div className="members">
            {activeTeam.map((profile) => (
              <MemberCard {...profile} key={profile.name} />
            ))}
          </div>
        </div>
        <h2>Advised By</h2>
        <div className="memberArea">
          <div className="members">
            {advisingTeam.map((profile) => (
              <MemberCard {...profile} key={profile.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Currently not being used, not removing in case we want to use again later
function PastMemeber({ name, image, role }) {
  return (
    <div className="pastMember">
      <div className="allInfo">
        <FiberManualRecordIcon />
        <div className="pastInfo">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

function taufik(name) {
  if (name === "Taufik") {
    return (
      <div>
        <br></br>
      </div>
    );
  }
}

function MemberCard({ name, image, role, linkedIn }) {
  return (
    <div className="MemberCard">
      <a href={linkedIn} target="_blank" rel="noreferrer">
        <img src={image} alt={"Profile of " + name} />
        <div className="info">
          <div className="name">
            <h3>{name.split(" ")[0]}</h3>
          </div>
          {taufik(name)}
          <h3>{name.split(" ")[1]}</h3>
          <p>{role}</p>
          <div className="SocialIcon">
            <SocialIcon url={linkedIn} style={{ height: 30, width: 30 }} />
          </div>
        </div>
      </a>
    </div>
  );
}
