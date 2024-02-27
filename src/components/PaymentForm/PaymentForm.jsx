import { Button } from "react-bootstrap";
import styles from "./PaymentForm.module.css";
import { useState } from "react";
import { checkout, useCartCrud } from "../../Hooks/useCart";

const PaymentForm = ({ checkOutId }) => {
  const [shippingAddress, setShippingAddress] = useState({
    details: "",
    phone: "",
    city: "",
  });
  const handleFormChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, data } = useCartCrud(checkout);

  return (
    <div className={styles.PaymentForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ id: checkOutId, shippingAddress });
          if (data?.data?.status === "success") {
            window.location.href = data?.data?.session?.url;
          }
        }}
      >
        <label htmlFor="details"> Details</label>
        <input
          type="text"
          id="details"
          name="details"
          className="form-control mb-3"
          value={shippingAddress.details}
          onChange={handleFormChange}
        />
        <label htmlFor="phone"> Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="form-control mb-3"
          value={shippingAddress.phone}
          onChange={handleFormChange}
        />
        <label htmlFor="city"> City</label>
        <input
          type="text"
          id="city"
          name="city"
          className="form-control mb-3"
          value={shippingAddress.city}
          onChange={handleFormChange}
        />
        <Button variant="success" type="submit">
          Go To Payment
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
