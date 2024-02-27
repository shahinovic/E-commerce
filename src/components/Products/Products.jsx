import { Helmet } from "react-helmet";
import { useProducts } from "../../Hooks/useProducts";
import Product from "../Product/Product";
import { getWishList, useGetWishList } from "../../Hooks/useWishList";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Products = () => {
  const { data, isLoading, isError, error } = useProducts();
  const { data: wishListData } = useGetWishList(getWishList);

  const location = useLocation();

  if (isLoading) return <Loader />;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div>
      {location.pathname === "/products" && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      )}
      <div className="container">
        <div className="row">
          {data.map((product) => (
            <Product
              key={product._id}
              wishListData={wishListData}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
