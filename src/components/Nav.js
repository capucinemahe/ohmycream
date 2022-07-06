import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

export default function Nav() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos d'OMC</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contactez-nous</li>
        </NavLink>
      </ul>
    </div>
  );
}
