import styles from "./FeatureProducts.module.css";
import Loader from "../Loader/Loader";
import { useProducts } from "../../Hooks/useProducts";
import Product from "../Product/Product";

const FeatureProducts = () => {
  const { data, isLoading, isError, error } = useProducts();

  const shortenTitle = (title, maxLength = 20) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.slice(0, maxLength - 3) + "...";
    }
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className={styles.FeatureProducts}>
      <h2>Shop Popular Products</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row">
          {data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureProducts;
