import { Helmet } from "react-helmet";
import { useProducts } from "../../Hooks/useProducts";
import Product from "../Product/Product";
import { getWishList, useGetWishList } from "../../Hooks/useWishList";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { data, isLoading, isError, error } = useProducts();
  const { data: wishListData } = useGetWishList(getWishList);
  console.log("🚀 ~ Products ~ data:", wishListData);
  const location = useLocation();

  if (isLoading) return <h2>Loading...</h2>;
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
