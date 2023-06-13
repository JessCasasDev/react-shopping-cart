import React from "react";
import styles from "./CartTotal.module.css";

type CartTotalProps = {
  total: string;
  removeAllItems: () => void;
};
export function CartTotal({ total, removeAllItems }: CartTotalProps) {
  return (
    <div className={styles["cart-summary__total"]}>
      <h3 className={styles["cart-summary__total--title"]}>Total</h3>
      <p className={styles["cart-summary__total--value"]}>{total}</p>
      <button
        onClick={removeAllItems}
        className={styles["cart-summary__total--button"]}
      >
        Buy!
      </button>
    </div>
  );
}
