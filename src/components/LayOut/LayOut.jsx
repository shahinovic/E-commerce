import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainNavbar from "../MainNavbar/MainNavbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import { TokenContext } from "../../Context/Token";
import Cart from "../Cart/Cart";

const LayOut = () => {
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ LayOut ~ location:", location);

  useEffect(() => {
    if (localStorage.getItem("token") && location.pathname !== "/allorders") {
      setToken(localStorage.getItem("token"));
      navigate("/home");
    }
  }, []);
  return (
    <div className="layout " style={{ paddingTop: "80px" }}>
      <MainNavbar />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
