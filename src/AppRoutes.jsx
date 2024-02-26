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
  ProductDetails,
  Allorders,
} from "./components";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

const routesConfig = [
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
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
        path: "/productDetails/:id",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <ProductDetails />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Brands />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Categories />
            </Suspense>
          </ProtectedRoutes>
        ),
      },

      {
        path: "allorders",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <Allorders />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoutes>
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(routesConfig);
