import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation_list}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
