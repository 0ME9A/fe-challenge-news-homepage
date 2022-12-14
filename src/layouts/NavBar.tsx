import React from "react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <h1 className={styles.logo}>W.</h1>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#new">New</a>
        </li>
        <li>
          <a href="#popular">Popular</a>
        </li>
        <li>
          <a href="#trending">Trending</a>
        </li>
        <li>
          <a href="#category">Category</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
