import "./Team.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { SocialIcon } from "react-social-icons";

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
import arthurProfile from "../../../../assets/profiles/arthur.jpeg";
import lewisProfile from "../../../../assets/profiles/lewis.jpeg";
import nathanProfile from "../../../../assets/profiles/nathan.jpeg";
import mckennaProfile from "../../../../assets/profiles/mckenna.jpeg";
import taufikProfile from "../../../../assets/profiles/taufik.jpg";
import josephProfile from "../../../../assets/profiles/joseph.jpg";
import majidProfile from "../../../../assets/profiles/majid.jpg";
import benProfile from "../../../../assets/profiles/ben.jpg";
import cpcie from "../../../../assets/cpcieSquare.png";
import iq from "../../../../assets/innovationQuest.jpeg";
import vw from "../../../../assets/ventureWell.png";

const inactiveTeam = [
  { name: "Emil Erickson", image: emilProfile, role: "Electrial Eningeer" },
  { name: "Caitlin Maltbie", image: caitlinProfile, role: "Business Lead" },
  { name: "John Waidhofer", image: johnProfile, role: "Software Developer" },
  { name: "Richa Gadgil", image: richaProfile, role: "Data Scientist" },
  { name: "Jeni Kawate", image: jeniProfile, role: "Electrical Engineer" },
  { name: "Janine Darato", image: janineProfile, role: "Electrical Engineer" },
  { name: "Nick Marta", image: nickProfile, role: "Electrical Engineer" },
  { name: "Reed Slobodin", image: reedProfile, role: "Electrical Engineer" },
  { name: "CJ Gray", image: CJProfile, role: "Mechanical Engineer" },
  { name: "Arthur Waidhofer", image: arthurProfile, role: "Graphic Designer" },
];

const activeTeam = [
  {
    name: "Dominic Gaiero",
    image: dominicProfile,
    role: "Engineering Lead",
    linkedIn: "https://www.linkedin.com/in/dgaiero/",
  },
  {
    name: "Lewis Pietropaoli",
    image: lewisProfile,
    role: "Electrical Engineer",
    linkedIn: "https://www.linkedin.com/in/lewispietropaoli/",
  },
  {
    name: "McKenna Reed",
    image: mckennaProfile,
    role: "Software Developer",
    linkedIn: "https://www.linkedin.com/in/mreed12/",
  },
  {
    name: "Brooke Randolph",
    image: brookeProfile,
    role: "Business Lead",
    linkedIn: "https://www.linkedin.com/in/brookerandolph/",
  },
  {
    name: "Nathan Wang",
    image: nathanProfile,
    role: "Electrical Engineer",
    linkedIn: "https://www.linkedin.com/in/nathandwang/",
  },
  {
    name: "Benjamin Trust",
    image: benProfile,
    role: "Mechanical Engineer",
    linkedIn: "https://www.linkedin.com/in/benjamin-a-trust/",
  },
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

const partners = [
  {
    name: "VentureWell",
    image: vw,
    website: "https://venturewell.org/",
  },
  {
    name: "Innovation Quest",
    image: iq,
    website: "https://cie.calpoly.edu/prepare/innovation-quest/",
  },
  {
    name: "Cal Poly Accelerator Program",
    image: cpcie,
    website: "https://cie.calpoly.edu/launch/accelerator/",
  },
];

export default function currentTeam() {
  return (
    <section className="Team">
      <h2 className="sponsorHeader">Our Sponsors</h2>
      <div className="memberArea">
        <div className="members">
          {partners.map((profile) => (
            <PartnerCard {...profile} key={profile.name} />
          ))}
        </div>
      </div>
      <h2> </h2>
      <h2>Meet the Team</h2>
      <div className="memberArea">
        <div className="members">
          {activeTeam.map((profile) => (
            <MemberCard {...profile} key={profile.name} />
          ))}
        </div>
        <h2> </h2>
        <h2>Thank you to our past contributors</h2>
        <div className="pastMembers">
          {inactiveTeam.map((profile) => (
            <PastMemeber {...profile} key={profile.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

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

function PartnerCard({ name, image, website }) {
  return (
    <div className="PartnerCard">
      <a href={website} target="_blank" rel="noreferrer">
        <img src={image} alt={"Profile of " + name} />
      </a>
    </div>
  );
}
