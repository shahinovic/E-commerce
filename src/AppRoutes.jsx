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
  ProtectedRoutes,
} from "./components";

const routesConfig = [
  {
    path: "",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes>
            <Login />
          </ProtectedRoutes>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedRoutes>
            {" "}
            <Register />
          </ProtectedRoutes>
        ),
      },
      {
        path: "home",
        element: (
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoutes>
            {" "}
            <Cart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoutes>
            <Brands />
          </ProtectedRoutes>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoutes>
            <Categories />
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoutes>
            <NotFound />
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(routesConfig);
