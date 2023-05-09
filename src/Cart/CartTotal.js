import styles from "./CartTotal.module.css";

export function CartTotal({ total, removeAllItems }) {
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
