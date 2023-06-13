import { getPrice, renderPrice } from "../utils/functions/price";
import { useContext, useEffect, useState } from "react";

import CartContext from "../store/cart-context";
import { CartTotal } from "./CartTotal";
import CollectionItem from "../Collections/CollectionItem";
import { Navigate } from "react-router-dom";
import QuantityButton from "../UI/QuantityButton";
import styles from "./Cart.module.css";
import trashIcon from "../assets/images/icon-delete.svg";
import React from "react";

export default function Cart() {
  const {
    cartList,
    changeQuantity,
    removeProduct,
    removeAllItems,
    totalPrice,
  } = useContext(CartContext);
  const [totalValue, setTotalValue] = useState("$0");

  useEffect(() => {
    setTotalValue(renderPrice(totalPrice));
  }, [totalPrice]);

  const handleNavigate = (id: string) => {
    Navigate({ to: `/collections/${id}` });
  };

  const increaseHandler = (id: string) => {
    changeQuantity(id, 1);
  };

  const decreaseHandler = (id: string) => {
    changeQuantity(id, -1);
  };

  return (
    <main className={styles["cart"]}>
      <section className={styles["cart-list"]}>
        {cartList.length > 0 ? (
          cartList.map((item) => (
            <div className={styles["cart-list-item"]} key={item.id}>
              <CollectionItem onClick={handleNavigate} item={item} />
              <div className={styles["cart-list-item__quantity"]}>
                <div className={styles["cart-list-item__quantity--cart"]}>
                  <QuantityButton
                    quantity={item.quantity}
                    decrease={() => decreaseHandler(item.id)}
                    increase={() => increaseHandler(item.id)}
                  />
                  <button
                    onClick={() => removeProduct(item.id)}
                    className={styles["cart-list-item__quantity--delete"]}
                  >
                    <img src={trashIcon} alt="delete item from cart" />
                  </button>
                </div>
                <div
                  className={styles["cart-list-item__quantity--final-price"]}
                >
                  {renderPrice(getPrice(item.finalPrice, item.quantity))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>There are no products on the cart... yet!</p>
        )}
      </section>
      <section className={styles["cart-summary"]}>
        {cartList.length > 0 ? (
          <CartTotal total={totalValue} removeAllItems={removeAllItems} />
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
