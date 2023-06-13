import React from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import styles from "./QuantityButton.module.css";

type QuantityProps = {
  quantity: number;
  decrease: () => void;
  increase: () => void;
};
export default function QuantityButton({
  quantity,
  decrease,
  increase,
}: QuantityProps) {
  return (
    <div className={styles["quantity-button"]}>
      <button className={styles["quantity-button--button"]} onClick={decrease}>
        <img src={minusIcon} alt="decrease quantity" />
      </button>
      <div className={styles["quantity-button--quantity"]}>{quantity}</div>
      <button className={styles["quantity-button--button"]} onClick={increase}>
        <img src={plusIcon} alt="increase quantity" />
      </button>
    </div>
  );
}
