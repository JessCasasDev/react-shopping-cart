import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div className={styles["error-page"]} id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurried.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
