import { lazy } from "react";
// import { default as LayOut } from "./LayOut/LayOut";
const LayOut = lazy(() => import("./LayOut/LayOut"));
// import { default as Register } from "./Register/Register";
const Register = lazy(() => import("./Register/Register"));
// import { default as Login } from "./Login/Login";
const Login = lazy(() => import("./Login/Login"));
// import { default as HomePage } from "./HomePage/HomePage";
const HomePage = lazy(() => import("./HomePage/HomePage"));
// import { default as ProductDetails } from "./ProductDetails/ProductDetails";
const ProductDetails = lazy(() => import("./ProductDetails/ProductDetails"));
// import { default as Cart } from "./Cart/Cart";
const Cart = lazy(() => import("./Cart/Cart"));
// import { default as Payment } from "./Payment/Payment";
const Payment = lazy(() => import("./Payment/Payment"));
// import { default as Footer } from "./Footer/Footer";
const Footer = lazy(() => import("./Footer/Footer"));
// import { default as NotFound } from "./NotFound/NotFound";
const NotFound = lazy(() => import("./NotFound/NotFound"));
// import { default as Products } from "./Products/Products";
const Products = lazy(() => import("./Products/Products"));

// import { default as Categories } from "./Categories/Categories";
const Categories = lazy(() => import("./Categories/Categories"));

const Brands = lazy(() => import("./Brands/Brands"));

const Allorders = lazy(() => import("./Allorders/Allorders"));
import { default as ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";

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
  NotFound,
};
