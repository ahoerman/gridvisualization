import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/faq"
          className={location.pathname === "/faq" ? "nav-link active" : "nav-link"}
        >
          FAQ
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/powerplants"
          className={location.pathname === "/powerplants" ? "nav-link active" : "nav-link"}
        >
          Power Plants
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
