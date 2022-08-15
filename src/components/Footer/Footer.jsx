import "./Footer.scss";

import logo from "../../assets/logo-circle.svg";

import { Link } from "react-router-dom";

import routes from "../../routes";

const socialMedia = [
  { title: "LinkedIn", href: "https://www.linkedin.com/company/perchsensing/" },
];

const partnerRoutes = [
  { title: "VentureWell", href: "https://venturewell.org/" },
  {
    title: "Innovation Quest",
    href: "https://cie.calpoly.edu/prepare/innovation-quest/",
  },
  {
    title: "Cal Poly Accelerator Program",
    href: "https://cie.calpoly.edu/launch/accelerator/",
  },
  {
    title: "NSF Innovation Corps",
    href: "https://www.nsf.gov/news/special_reports/i-corps/",
  },
];

export default function Footer() {
  return (
    <footer className="Footer">
      <hr />
      <div className="content">
        <div className="company-description">
          <img className="logo" src={logo} alt="Perch Logo" loading="lazy" />
          {/* <p>
            We create tools that anticipate and stop wildfires. By improving
            visibility into regions with high fire risk using mesh sensor
            technology, Perch can warn authorities of dangerous situations
            before fires spread.
          </p> */}
        </div>
        <nav>
          <ul className="site-links">
            <h3>Resources</h3>
            {routes.map(({ title, to }) => (
              <li key={title}>
                <Link
                  className="resources"
                  to={to}
                  key={title}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="social-media">
            <h3>Follow Us</h3>
            {socialMedia.map(({ title, href }) => (
              <li key={title}>
                <a href={href} key={title}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
