import { GridLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <section className="sec app_loader">
      <GridLoader color="#36d7b7" />
    </section>
  );
};

export default Loader;
