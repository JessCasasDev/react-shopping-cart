import styles from "./UserProfileButton.module.css";
import user_profile from "../assets/images/user-profile.svg";
import React from "react";

export default function UserProfileButton({
  userImage,
}: {
  userImage: string;
}) {
  return (
    <img
      className={styles["user-profile"]}
      src={userImage ?? user_profile}
      alt="user profile"
    />
  );
}
