import "./App.css";
import Header from "./Navigation/Header";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";
import React from "react";

function App() {
  return (
    <CartContextProvider>
      <Header userImage="default.jpg" />
      <Outlet />
    </CartContextProvider>
  );
}

export default App;
