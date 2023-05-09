import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import styles from "./QuantityButton.module.css";

export default function QuantityButton({ quantity, decrease, increase }) {
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
