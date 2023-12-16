import React from "react";
import letmainlogo from "./../landing-assets/letmainlogo.png";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav_landing}>
      <div className={styles.logo_container}>
        <img id={styles.logo} src={letmainlogo} alt="main-logo" />
      </div>
      <div className={styles.list_container}>
        <ul className={styles.landing_nav_links}>
          <li className={styles.landing_link}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.landing_active} ${styles.nav_link} `
                  : `${styles.nav_link}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className={styles.landing_link}>
            <NavLink
              to="/learn"
              className={({ isActive }) =>
                isActive
                  ? `${styles.landing_active} ${styles.nav_link} `
                  : `${styles.nav_link}`
              }
            >
              Why Us
            </NavLink>
          </li>
          <li className={styles.landing_link}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.landing_active} ${styles.nav_link} `
                  : `${styles.nav_link}`
              }
            >
              About
            </NavLink>
          </li>
          <li className={styles.landing_link}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styles.landing_active} ${styles.nav_link} `
                  : `${styles.nav_link}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.authenticate}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? `${styles.landing_active} ${styles.nav_link} `
              : `${styles.nav_link}`
          }
        >
          LOG IN
        </NavLink>
      </div>
    </nav>
  );
}
