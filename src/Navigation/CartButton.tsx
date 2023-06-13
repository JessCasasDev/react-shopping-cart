import styles from "./CartButon.module.css";
import cart from "../assets/images/icon-cart.svg";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import React from "react";

export default function CartButton() {
  const { totalProductsOnCart } = useContext(CartContext);

  const [cartValue, setCartValue] = useState<string>("0");

  useEffect(() => {
    setCartValue(totalProductsOnCart < 10 ? `${totalProductsOnCart}` : "+9");
  }, [totalProductsOnCart]);

  return (
    <div className={styles["cart"]}>
      <img src={cart} alt="icon shop cart" />
      <span className={styles["cart-number"]}>{cartValue}</span>
    </div>
  );
}
