import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["main-footer"]}>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.linkedin.com/in/john-carlo-asilo-679047204/">John Carlo Asilo</a>.
    </footer>
  );
};

export default Footer;
