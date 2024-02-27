import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { getProduct, useProduct } from "../../Hooks/useProducts";
import { FaStar } from "react-icons/fa";
import Loader from "../Loader/Loader";
import { addToCart, useCartCrud } from "../../Hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useProduct({
    id,
    fn: getProduct,
  });

  const { mutate } = useCartCrud(addToCart);

  if (isLoading) return <Loader />;
  if (isError) return <h2>{isError}</h2>;

  return (
    <section className="sec">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ProductDetails</title>
      </Helmet>
      <div className="productDetails px-2 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={data.images[0]} className="w-100" alt={data.title} />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center  ">
              <p className="text-main ">{data.category.name}</p>
              <h3 className="h2" title={data.title}>
                {data.title}
              </h3>

              <p>{data.description}</p>
              <div className="d-flex justify-content-between">
                <p>{data.price} EGP</p>
                <p>
                  <FaStar className="text-warning" />
                  {data.ratingsAverage}
                </p>
              </div>

              <button
                onClick={() => mutate(data._id)}
                className="btn bg-main text-white w-100"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
