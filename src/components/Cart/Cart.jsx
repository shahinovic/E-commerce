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

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(UserContext);
  const cartStyle = {
    position: "fixed",
    top: "0",
    right: isCartOpen ? "0" : "-40vw",
    height: "100vh",
    width: "30vw",
    backgroundColor: "#F4F5F7",
    zIndex: "9999",
    transition: "all 0.5s ease",
  };

  const cartRef = useRef(null);

  const handleCloseEvent = (e) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(e.target) &&
      !e.target.classList.contains("cart_btn")
    ) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseEvent);

    return () => window.removeEventListener("click", handleCloseEvent);
  }, []);

  const { data, isLoading, isError } = useGetCart();
  console.log("🚀 ~ Cart ~ data_id:", data);

  const { mutate: deleteItem } = useCartCrud(deleteCart);

  const { mutate: updateItem, isPending: disablenBtn } =
    useCartCrud(updateCart);

  // const { mutate: clear } = useCartCrud(clearCart);

  // if (isLoading)
  //   return (
  //     <aside
  //       ref={cartRef}
  //       style={cartStyle}
  //       className="cart px-3 text-center py-5"
  //     >
  //       <Loader />
  //     </aside>
  //   );
  if (isError || !data || data?.data?.products?.length === 0) {
    return (
      <aside ref={cartRef} style={cartStyle} className="cart px-3">
        <button onClick={() => setIsCartOpen(false)} className="btn ">
          <Close />
        </button>
        <div className="text-center py-5">
          <h2>Cart Is Empty</h2>
          <img src={cart_is_empty} className="w-100" alt="" />
        </div>
      </aside>
    );
  }

  return (
    <aside ref={cartRef} style={cartStyle} className="cart px-3">
      <button onClick={() => setIsCartOpen(false)} className="btn ">
        <Close />
      </button>

      <div className="d-flex flex-column align-items-center gap-3">
        <h3>Shop Cart:</h3>
        {data && (
          <p className="text-main">
            Total Cart Price : {data?.data?.totalCartPrice} EGP
          </p>
        )}
        <div className="cart_products">
          {data?.data?.products?.map((product, index) => (
            <div key={product._id} className="row bg-white rounded ">
              <div className="col-md-2">
                <img
                  src={product.product.imageCover}
                  className="w-100"
                  alt={product.product.title}
                />
              </div>
              <div className="col-md-7">
                <p>{product.product.title}</p>
                <p className="text-main mb-0">{product.price}</p>
                <button
                  onClick={() => {
                    deleteItem(product.product._id);
                  }}
                  className="btn px-0"
                >
                  <FaRegTrashAlt className="text-main" /> Remove
                </button>
              </div>
              <div className="col-md-2 d-flex align-items-center gap-2">
                <button
                  id={index}
                  disabled={
                    disablenBtn || product.product.quantity === product.count
                  }
                  onClick={() =>
                    updateItem({
                      id: product.product._id,
                      count: product.count + 1,
                    })
                  }
                  className=" btn-main"
                >
                  +
                </button>
                <p className="mb-0 px-1 fs-5 text-main">{product.count}</p>
                <button
                  disabled={disablenBtn || product.count === 1}
                  onClick={() => {
                    if (product.count === 1) return;
                    updateItem({
                      id: product.product._id,
                      count: product.count - 1,
                    });
                  }}
                  className=" btn-main"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data && (
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
      )}
    </aside>
  );
};

export default Cart;
