import { Outlet, useNavigate } from "react-router-dom";
import MainNavbar from "../MainNavbar/MainNavbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import { TokenContext } from "../../Context/Token";

const LayOut = () => {
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "E-commerce";
    if (localStorage.getItem("token")) {
      navigate("/home");
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <div className="layout">
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
