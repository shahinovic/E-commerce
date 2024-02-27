import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { FaStar } from "react-icons/fa";
import { addToCart, useCartCrud } from "../../Hooks/useCart";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  addToWishList,
  removeFromWishList,
  useChangeWishList,
} from "../../Hooks/useWishList";

const Product = ({ product, wishListData }) => {
  const [heartActive, setHeartActive] = useState(
    wishListData?.data?.data?.find((ele) => ele._id === product._id) !==
      undefined
      ? true
      : false
  );

  const { mutate } = useCartCrud(addToCart);
  const { mutate: wishListAddBtn } = useChangeWishList(addToWishList);
  const { mutate: wishListRemoveBtn } = useChangeWishList(removeFromWishList);
  const shortenTitle = (title, maxLength = 20) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.slice(0, maxLength - 3) + "...";
    }
  };

  const handleWishlist = () => {
    if (heartActive) {
      wishListRemoveBtn(product._id);
      setHeartActive(false);
    } else {
      wishListAddBtn(product._id);
      setHeartActive(true);
    }
  };

  return (
    <div className="col-md-3">
      <div className="product px-2 py-3">
        <FaHeart
          className={`heart ${heartActive ? "active" : ""}`}
          onClick={handleWishlist}
        />
        <Link to={`/productDetails/${product._id}`}>
          <img src={product.images[0]} className="w-100" alt={product.title} />
          <p className="text-main">{product.category.name}</p>
          <h3 className="h6" title={product.title}>
            {shortenTitle(product.title, 20)}
          </h3>
          <div className="d-flex justify-content-between">
            <p>{product.price} EGP</p>
            <p>
              <FaStar className="text-warning" />
              {product.ratingsAverage}
            </p>
          </div>
        </Link>
        <button
          className="btn bg-main text-white w-100"
          onClick={() => {
            mutate(product._id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
