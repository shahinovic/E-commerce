import { useMutation } from "@tanstack/react-query";
import styles from "./ForgotPasswordEmail.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

const ForgotPasswordEmail = ({ setIsRest, setIsEmail, setUserEmail }) => {
  const { mutate } = useMutation({
    mutationFn: (email) => {
      return axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        { email }
      );
    },
    select: (data) => data,
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.data.message);
      setIsRest(true);
      setIsEmail(false);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
    }),
    onSubmit: (values) => {
      setUserEmail(values.email);
      mutate(values.email);
    },
  });
  return (
    <>
      <h1 className="mt-5">
        Enter the email address associated with your account
      </h1>
      <form className="my-5  ">
        <label className="fs-5 fw-bold text-main mb-3" htmlFor="email">
          Enter Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control mb-3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.email}
          </div>
        ) : null}
        <button
          className="btn btn_main bg-main text-white fs-5 fw-bold w-100"
          type="submit"
          disabled={formik.errors.email}
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordEmail;
