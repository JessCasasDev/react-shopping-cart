import "./App.css";
import Header from "./Navigation/Header";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  );
}

export default App;
