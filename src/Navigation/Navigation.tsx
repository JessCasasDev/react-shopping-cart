import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link to={"/"}>Collections</Link>
        <Link to="/about">About</Link>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default Navigation;
