import styles from "./ForgotPassword.module.css";

import { useState } from "react";
import ForgotPasswordEmail from "../ForgotPasswordEmail/ForgotPasswordEmail";
import VerifyResetCode from "../VerifyResetCode/VerifyResetCode";
import ResetPassword from "../ResetPassword/ResetPassword";

const ForgotPassword = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [isRest, setIsRest] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  return (
    <section className="sec">
      <div className="container">
        {isEmail && (
          <ForgotPasswordEmail setIsRest={setIsRest} setIsEmail={setIsEmail} />
        )}
        {isRest && (
          <VerifyResetCode setIsVerify={setIsVerify} setIsRest={setIsRest} />
        )}
        {isVerify && <ResetPassword />}
      </div>
    </section>
  );
};

export default ForgotPassword;
