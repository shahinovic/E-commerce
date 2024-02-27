import { lazy } from "react";

const LayOut = lazy(() => import("./LayOut/LayOut"));
const Register = lazy(() => import("./Register/Register"));
const Login = lazy(() => import("./Login/Login"));
const HomePage = lazy(() => import("./HomePage/HomePage"));
const ProductDetails = lazy(() => import("./ProductDetails/ProductDetails"));
const Payment = lazy(() => import("./Payment/Payment"));
const Footer = lazy(() => import("./Footer/Footer"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Products = lazy(() => import("./Products/Products"));
const Categories = lazy(() => import("./Categories/Categories"));
const Brands = lazy(() => import("./Brands/Brands"));
const Allorders = lazy(() => import("./Allorders/Allorders"));
import { default as Cart } from "./Cart/Cart";
import { default as WishList } from "./WishList/WishList";
import { default as ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";
const ForgotPassword = lazy(() => import("./ForgotPassword/ForgotPassword"));

export {
  LayOut,
  Register,
  Login,
  HomePage,
  ProductDetails,
  Cart,
  Payment,
  Footer,
  Products,
  Categories,
  Brands,
  ProtectedRoutes,
  Allorders,
  WishList,
  ForgotPassword,
  NotFound,
};
