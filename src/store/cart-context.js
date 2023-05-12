import React, { useEffect, useState } from "react";

import data from "../assets/data/data.json";
import { getPrice } from "../utils/functions/price";

const initialCart = {
  cartList: [],
  addProduct: (_id, _quantity) => {},
  changeQuantity: (_id, _quantity) => {},
  removeProduct: (_id) => {},
  removeAllItems: () => {},
  totalProductsOnCart: 0,
};

const CartContext = React.createContext(initialCart);

export const CartContextProvider = (props) => {
  const [collections, _setCollection] = useState(data.data);
  const [cartList, setCartList] = useState([]);
  const [totalProductsOnCart, setTotalProductsOnCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalProducts = cartList.reduce(
      (previousValue, currentValue) => currentValue.quantity + previousValue,
      0
    );
    setTotalProductsOnCart(totalProducts);
    const total = cartList
      .map((item) => getPrice(item.finalPrice, item.quantity))
      .reduce((prev, curr) => prev + curr, 0);
    setTotalPrice(total);
  }, [cartList]);

  const addProductHandler = (id, quantity) => {
    setCartList((cartList) => {
      if (quantity === 0) {
        return cartList;
      }
      const index = cartList.findIndex((item) => item.id === id);
      if (index > -1) {
        const product = { ...cartList[index] };
        product.quantity = quantity + product.quantity;

        return [
          ...cartList.slice(0, index),
          product,
          ...cartList.slice(index + 1, cartList.length),
        ];
      } else {
        const item = collections.find((item) => item.id === id);
        const newItem = {
          ...item,
          quantity,
        };

        return [...cartList, newItem];
      }
    });
  };

  const changeQuantityHandler = (id, quantity) => {
    setCartList((cartList) => {
      const index = cartList.findIndex((item) => item.id === id);
      if (index > -1) {
        const product = { ...cartList[index] };
        const newQuantity = quantity + product.quantity;
        if (newQuantity === 0) {
          return cartList.filter((item) => item.id !== id);
        }
        product.quantity = newQuantity;

        return [
          ...cartList.slice(0, index),
          product,
          ...cartList.slice(index + 1, cartList.length),
        ];
      }

      return cartList;
    });
  };

  const removeProductHandler = (id) => {
    setCartList((cartList) => cartList.filter((item) => item.id !== id));
  };

  const removeAllItemsHandler = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList: cartList,
        totalPrice: totalPrice,
        totalProductsOnCart: totalProductsOnCart,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        changeQuantity: changeQuantityHandler,
        removeAllItems: removeAllItemsHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
