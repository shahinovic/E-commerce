import { createBrowserRouter } from "react-router-dom";
import {
  Brands,
  Cart,
  Categories,
  HomePage,
  LayOut,
  Login,
  Products,
  Register,
  NotFound,
} from "./components";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "brands", element: <Brands /> },
      { path: "categories", element: <Categories /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
