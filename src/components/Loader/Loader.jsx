import { GridLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <GridLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
