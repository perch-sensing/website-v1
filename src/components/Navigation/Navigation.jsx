import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import logo from "../../assets/perch-logo.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { useTransition, a } from "react-spring";
import { useState } from "react";

const routes = [
  ["Home", "/"],
  ["Team", "/team"],
  ["Research", "/research"],
  ["Contact", "/contact"],
];

export default function Navigation() {
  const isLarge = useMediaQuery("min-width: 1070px");

  return isLarge ? <LargeNav /> : <SmallNav />;
}

function LargeNav() {
  const { pathname } = useLocation();
  return (
    <nav className="Navigation">
      <img src={logo} alt="Perch Logo" />
      <ul className="large-menu">
        {routes.map(([title, url]) => (
          <li key={title}>
            <Link className={pathname === url ? "active" : ""} to={url}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SmallNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuTransition = useTransition(menuOpen, null, {
    from: {
      clipPath: "circle(0% at 100% 0)",
    },
    enter: {
      clipPath: "circle(0% at 100% 0)",
    },
    leave: {
      clipPath: "circle(0% at 100% 0)",
    },
  });

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <nav className="Navigation">
      <img src={logo} alt="Perch Logo" />
      <button className="menu-icon" onClick={() => setMenuOpen(true)}>
        <MenuIcon />
      </button>
      {menuTransition.map(
        ({ item, key, props }) =>
          item && (
            <a.aside className="dropdown" key={"dropdown"} style={props}>
              <ul className="dropdown-menu">
                {routes
                  .filter((path) => pathname !== path.url)
                  .map(([title, url]) => (
                    <li key={title}>
                      <Link to={url} onClick={closeMenu}>
                        {title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </a.aside>
          )
      )}
    </nav>
  );
}
