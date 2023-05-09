import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error";
import About from "./About/About";
import Collections from "./Collections/Collections";
import CollectionDetail, {
  loader as collectionLoader,
} from "./Collections/CollectionDetail";
import Cart from "./Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Collections /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:productId",
        element: <CollectionDetail />,
        loader: collectionLoader,
      },
      {
        path: "/contact",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
