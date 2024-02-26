import { error } from "../../assets";

const NotFound = () => {
  return (
    <div
      className="not-found  d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <img src={error} className="w-75" style={{ height: "70vh" }} alt="" />
    </div>
  );
};

export default NotFound;
