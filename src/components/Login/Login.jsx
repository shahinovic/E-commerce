import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./Login.module.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { TokenContext } from "../../Context/Token";
import { UserContext } from "../../Context/User";
const { main_section_style } = styles;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setToken } = useContext(TokenContext);
  const { baseUrl } = useContext(UserContext);
  // const baseUrl = `https://ecommerce.routemisr.com`;

  const navigate = useNavigate();

  const formSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        baseUrl + "/api/v1/auth/signin",
        values
      );

      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        setToken(data);
        navigate("/home");
      }
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: formSubmit,
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
  });
  return (
    <section className={`login sec ${main_section_style}`}>
      <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
        <h1>Login</h1>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="input-group d-flex flex-column ">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control w-100"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="alert alert-danger" role="alert">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="input-group d-flex flex-column mb-3">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control w-100"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="alert alert-danger" role="alert">
              {formik.errors.password}
            </div>
          )}
        </div>

        <Link className="mb-2 text-main" to="/forgot-password">
          Forget Password?
        </Link>

        <Button
          variant="success"
          type="submit"
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          {isLoading ? <ScaleLoader color="white" /> : "Login"}
        </Button>
      </form>
    </section>
  );
};

export default Login;
