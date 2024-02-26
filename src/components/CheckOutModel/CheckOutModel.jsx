import PaymentForm from "../PaymentForm/PaymentForm";
import styles from "./CheckOutModel.module.css";

const CheckOutModel = ({ checkOutId }) => {
  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitleId">
              Payment Form
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <PaymentForm checkOutId={checkOutId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModel;
