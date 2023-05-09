import styles from "./UserProfileButton.module.css";
import user_profile from "../assets/images/user-profile.svg";

export default function UserProfileButton({ userImage }) {
  return (
    <img
      className={styles["user-profile"]}
      src={userImage ?? user_profile}
      alt="user profile"
    />
  );
}
