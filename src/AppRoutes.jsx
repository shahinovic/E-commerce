import { createBrowserRouter } from "react-router-dom";
import {
  Brands,
  Cart,
  Categories,
  HomePage,
  LayOut,
  Login,
  NotFound,
  Payment,
  ProductDetails,
  Products,
  Register,
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
      { path: "product-details", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "brands", element: <Brands /> },
      { path: "payment", element: <Payment /> },
      { path: "categories", element: <Categories /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
