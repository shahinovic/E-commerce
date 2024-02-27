import { useQuery } from "@tanstack/react-query";
import styles from "./Allorders.module.css";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../Context/User";

const Allorders = () => {
  const { baseUrl } = useContext(UserContext);
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => {
      return axios.get(`${baseUrl}/api/v1/orders/`);
    },
    select: (data) => data.data.data,
  });

  console.log("orders", data);
  return (
    <section className={`${styles.sec} sec`}>
      <div className="container">
        <h1 className="mb-3">Allorders component</h1>
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Allorders;
