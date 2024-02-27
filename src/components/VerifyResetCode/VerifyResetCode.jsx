import { useState } from "react";
import styles from "./VerifyResetCode.module.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const VerifyResetCode = ({ setIsVerify, setIsRest }) => {
  const [resetCode, setResetCode] = useState("");
  const handleChange = (e) => {
    setResetCode(e.target.value);
  };

  const { data, mutate } = useMutation({
    mutationFn: (resetCode) => {
      return axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        { resetCode }
      );
    },
    select: (data) => data,
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ VerifyResetCode ~ data:", data);
      toast.success(data.data.message);

      if (data.data.status === "Success") {
        setIsVerify(true);
        setIsRest(false);
      }
    },
  });

  console.log("🚀 ~ VerifyResetCode ~ data.data.status:", data?.data?.status);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(resetCode);
  };
  return (
    <div className={styles.VerifyResetCode}>
      <h1 className="mt-5">Verify Reset Code </h1>
      <p className="mt-5">Enter the verification code sent to your email</p>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter verification code"
          value={resetCode}
          onChange={handleChange}
        />
        <button className="btn-main bg-main w-100 fs-5 fw-bold" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyResetCode;
