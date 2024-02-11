import { Outlet } from "react-router-dom";
import MainNavbar from "../MainNavbar/MainNavbar";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <div className="layout">
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
