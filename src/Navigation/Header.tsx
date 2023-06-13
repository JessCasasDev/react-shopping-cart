import logo from "../assets/images/logo.svg";

import Navigation from "./Navigation";
import styles from "./Header.module.css";
import CartButton from "./CartButton";
import UserProfileButton from "./UserProfileButton";
import { Link } from "react-router-dom";
import React from "react";

const Header = (props: { userImage: string }) => {
  const { userImage } = props;

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <img src={logo} alt="logo" />
        <Navigation />
      </div>
      <div className={styles.icons}>
        <Link to={"/cart"}>
          <CartButton />
        </Link>
        <Link to={"/user-profile"}>
          <UserProfileButton userImage={userImage} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
