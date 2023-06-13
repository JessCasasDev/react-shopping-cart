import React, { PropsWithChildren, useEffect, useState } from "react";

import data from "../assets/data/data.json";
import { getPrice } from "../utils/functions/price";
import { Cart } from "../utils/models/Cart.model";
import { Product } from "../utils/models/Product.model";

export interface ICartContext {
  cartList: Cart[];
  addProduct: (id: string, quantity: number) => void;
  changeQuantity: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
  removeAllItems: () => void;
  totalProductsOnCart: number;
  totalPrice: number;
}
const initialCart: ICartContext = {
  cartList: [],
  addProduct: (_id: string, _quantity: number) => {},
  changeQuantity: (_id, _quantity) => {},
  removeProduct: (_id) => {},
  removeAllItems: () => {},
  totalProductsOnCart: 0,
  totalPrice: 0,
};

const CartContext = React.createContext(initialCart);

export const CartContextProvider = (props: PropsWithChildren) => {
  const [cartList, setCartList] = useState<Cart[]>([]);
  const [totalProductsOnCart, setTotalProductsOnCart] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

  const addProductHandler = (id: string, quantity: number) => {
    setCartList((cartList: Cart[]) => {
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
        const item = data.data.find((item: Product) => item.id === id);
        if (item) {
          const newItem: Cart = {
            ...item,
            quantity,
          };
          return [...cartList, newItem];
        }

        return [...cartList];
      }
    });
  };

  const changeQuantityHandler = (id: string, quantity: number) => {
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

  const removeProductHandler = (id: string) => {
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
