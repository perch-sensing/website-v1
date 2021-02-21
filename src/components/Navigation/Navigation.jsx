import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Menu, X as XIcon } from "react-feather";
import { useTransition, a } from "react-spring";
import { useState } from "react";
import logo from "../../assets/perch-logo.svg";
import logoIcon from "../../assets/logo-circle.svg";

import routes from "../../routes";

export default function Navigation() {
  const isSmall = useMediaQuery("max-width: 735px");

  return isSmall ? <SmallNav /> : <LargeNav />;
}

function LargeNav() {
  const { pathname } = useLocation();
  return (
    <nav className="Navigation">
      <img className="logo" src={logo} alt="Perch Logo" role="img" />
      <ul className="large-menu">
        {routes.map((path) => (
          <li key={path.title}>
            <Link
              className={pathname === path.to ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
              {...path}
            >
              {path.title}
            </Link>
          </li>
        ))}
        <li>
          <a href="https://firemap.perchsensing.com" target="__blank">
            Fire Map
          </a>
        </li>
      </ul>
    </nav>
  );
}

function SmallNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTransition = useTransition(menuOpen, null, {
    from: {
      clipPath: "circle(0% at 100% 0)",
    },
    enter: {
      clipPath: "circle(200% at 100% 0)",
    },
    leave: {
      clipPath: "circle(0% at 100% 0)",
    },
  });

  function toggleMenu() {
    setMenuOpen((b) => !b);
  }
  return (
    <nav className="Navigation">
      <img className="logo" src={logoIcon} alt="Perch Logo" role="img" />
      <button className="menu-icon" onClick={toggleMenu}>
        <Menu />
      </button>
      {menuTransition.map(
        ({ item, props }) =>
          item && (
            <a.aside className="dropdown" key="dropdown" style={props}>
              <button className="wrapper close-button" onClick={toggleMenu}>
                <XIcon />
              </button>

              <ul className="dropdown-menu">
                {routes.map((path) => (
                  <li key={path.title}>
                    <Link
                      to={path.to}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        toggleMenu();
                      }}
                    >
                      {path.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://firemap.perchsensing.com" target="__blank">
                    Fire Map
                  </a>
                </li>
              </ul>
            </a.aside>
          )
      )}
    </nav>
  );
}
