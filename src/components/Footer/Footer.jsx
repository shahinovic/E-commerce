import {
  AMEX,
  amazon_pay,
  app_store,
  google_play,
  stripe,
  visa,
} from "../../assets";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <h3 className="h5">Get The FreshCart App</h3>
        <p>
          We Will Send you a link, open it on your phone to download the app
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-100 d-flex my-3"
        >
          <input
            style={{ width: "75%" }}
            name="email"
            type="email"
            placeholder="Your email address"
            className="form-control"
          />
          <button
            type="submit"
            style={{ width: "25%" }}
            className="btn-main bg-main"
          >
            Share App Link
          </button>
        </form>
        <div className="row other_links pt-3 pb-1  d-flex align-items-center justify-content-between">
          <div className="col-md-6 payment_parameters d-flex align-items-center ">
            <p className="fs-5 fw-bolder">Payment Parameters</p>
            <div className="img-container pb-3">
              <img src={amazon_pay} className="w-100" alt="" />
            </div>
            <div className="img-container pb-3">
              <img src={AMEX} className="w-100" alt="" />
            </div>
            <div className="img-container pb-3">
              <img src={stripe} className="w-100" alt="" />
            </div>
            <div className="img-container pb-3">
              <img src={visa} className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-6 phone_apps d-flex gap-2">
            <p className="fs-5 fw-bolder">Get deliveries with FreshCart</p>
            <div className="img-container pb-3">
              <img
                src={google_play}
                className="w-100"
                style={{ height: "25px" }}
                alt=""
              />
            </div>
            <div className="img-container pb-3">
              <img
                src={app_store}
                className="w-100"
                style={{ height: "25px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
