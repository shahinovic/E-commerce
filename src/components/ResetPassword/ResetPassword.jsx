import { useFormik } from "formik";
import styles from "./ResetPassword.module.css";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ email }) => {
  const navigate = useNavigate();
  const { data, mutate } = useMutation({
    mutationFn: (newPassword) => {
      return axios.put(
        `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        { email, newPassword }
      );
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.data.message);

      if (data.statusText === "OK") {
        navigate("/");
      }
    },
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      password: yup.string().required(),
      confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      mutate(values.password);
    },
  });
  return (
    <div className={styles.ResetPassword}>
      <h1 className="mt-5">ResetPassword component</h1>
      <form className="my-5">
        <label htmlFor="password" className="fs-5 fw-bold text-main mb-3">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="alert alert-danger" role="alert">
            {formik.errors.password}
          </div>
        )}
        <label
          htmlFor="confirmPassword"
          className="fs-5 fw-bold text-main mb-3"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="alert alert-danger" role="alert">
            {formik.errors.confirmPassword}
          </div>
        )}
        <button
          type="submit"
          className="btn btn_main bg-main text-white fs-5 fw-bold w-100"
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
