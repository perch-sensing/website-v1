import "./Footer.scss";

import logo from "../../assets/perch-logo.png";

import { Link } from "react-router-dom";

const navLinks = [
  { title: "Team", href: "/team" },
  { title: "Research", href: "/research" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const socialMedia = [
  { title: "LinkedIn", href: "https://www.linkedin.com/company/perchsensing/" },
  { title: "Facebook", href: "" },
  { title: "Twitter", href: "" },
];

export default function Footer() {
  return (
    <footer className="Footer">
      <hr />
      <div className="company-description">
        <img src={logo} alt="Perch Logo" />
        <p>
          We create tools that anticipate and stop wildfires. By improving
          visibility into regions with high fire risk using mesh sensor
          technology, Perch can warn authorities of dangerous situations before
          fires spread.
        </p>
      </div>
      <nav>
        <ul className="site-links">
          {navLinks.map(({ title, href }) => (
            <li key={title}>
              <Link to={href} key={title}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="social-media">
          {socialMedia.map(({ title, href }) => (
            <li key={title}>
              <a href={href} key={title}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
