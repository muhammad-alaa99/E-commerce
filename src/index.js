import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import "./index.css";
import store from "./store";
import Cart from "./view/pages/Cart";
import Products from "./view/pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <h1>Error</h1>,
    children: [{ index: true, element: <Products /> }],
  },
  { path: "/cart", element: <Cart /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
);
