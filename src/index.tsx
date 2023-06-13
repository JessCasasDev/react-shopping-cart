import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
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
const rootDOM =
  document.getElementById("root") ?? document.createElement("No data");

const root = ReactDOM.createRoot(rootDOM);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
