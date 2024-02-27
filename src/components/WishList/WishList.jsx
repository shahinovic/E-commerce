import { useContext, useEffect, useRef } from "react";

import { GrClose as Close } from "react-icons/gr";
import { UserContext } from "../../Context/User";
import {
  deleteCart,
  updateCart,
  useCartCrud,
  useGetCart,
} from "../../Hooks/useCart.js";
import { FaRegTrashAlt } from "react-icons/fa";
import Loader from "../Loader/Loader.jsx";
import CheckOutModel from "../CheckOutModel/CheckOutModel.jsx";
import { cart_is_empty } from "../../assets/index.js";
import {
  getWishList,
  removeFromWishList,
  useChangeWishList,
  useGetWishList,
} from "../../Hooks/useWishList.js";
import { Link } from "react-router-dom";

const WishList = () => {
  const { isWishListOpen, setIsWishListOpen } = useContext(UserContext);
  const cartStyle = {
    position: "fixed",
    top: "0",
    right: isWishListOpen ? "0" : "-55vw",
    height: "100vh",
    width: "50vw",
    backgroundColor: "#F4F5F7",
    zIndex: "9999",
    transition: "all 0.5s ease",
  };

  const wishListRef = useRef(null);

  const handleCloseEvent = (e) => {
    if (
      wishListRef.current &&
      !wishListRef.current.contains(e.target) &&
      !e.target.classList.contains("cart_btn")
    ) {
      setIsWishListOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseEvent);

    return () => window.removeEventListener("click", handleCloseEvent);
  }, []);

  const { data, isLoading, isError } = useGetWishList(getWishList);

  const { mutate: deleteItem } = useChangeWishList(removeFromWishList);

  const { mutate: updateItem, isPending: disablenBtn } =
    useCartCrud(updateCart);

  // const { mutate: clear } = useCartCrud(clearCart);

  if (isError || !data || data?.data?.data?.length === 0) {
    // if (true) {
    return (
      <aside ref={wishListRef} style={cartStyle} className="cart px-3">
        <button onClick={() => setIsWishListOpen(false)} className="btn ">
          <Close />
        </button>
        <div className="text-center py-5">
          <h2>WishList Is Empty</h2>
          <img src={cart_is_empty} className="w-100" alt="" />
        </div>
      </aside>
    );
  }

  return (
    <aside ref={wishListRef} style={cartStyle} className="cart px-3">
      <button onClick={() => setIsWishListOpen(false)} className="btn ">
        <Close />
      </button>

      <div className="d-flex flex-column align-items-center gap-3">
        <h3>Your WishList :</h3>
        {data && (
          <p className="text-main">
            {/* Total Cart Price : {data?.data?.totalCartPrice} EGP */}
          </p>
        )}
        <div className="wishlist_products">
          {data?.data?.data?.map((product, index) => (
            <div key={product._id} className="row bg-white rounded mb-3 ">
              <div className="col-md-2">
                <Link to={`/productDetails/${product._id}`}>
                  <img
                    src={product.imageCover}
                    className="w-100"
                    alt={product.title}
                  />
                </Link>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
                <p>{product.title}</p>
                <p className="text-main mb-0">{product.price}</p>
                <button
                  onClick={() => {
                    deleteItem(product._id);
                  }}
                  className="btn px-0"
                >
                  <FaRegTrashAlt className="text-main" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {data && (
        <>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            className="btn btn-success w-100  position-absolute bottom-0  cart_btn"
          >
            Check Out
          </button>
          <CheckOutModel checkOutId={data?.data?._id} />
        </>
      )} */}
    </aside>
  );
};

export default WishList;
