import styles from "./Register.module.css";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

const { main_section_style, input_group, alert } = styles;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const baseUrl = `https://ecommerce.routemisr.com`;
  const navigate = useNavigate();
  const submitForm = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        baseUrl + "/api/v1/auth/signup",
        values
      );

      if (data.message === "success") {
        navigate("/");
      }
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div className={`register ${main_section_style}`}>
      <Container>
        <h1>Register</h1>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
          }}
          validationSchema={yup.object({
            name: yup.string().required().min(3),
            email: yup.string().email().required(),
            password: yup.string().required().min(8),
            rePassword: yup.string().oneOf([yup.ref("password"), null]),
            phone: yup
              .string()
              .required()
              .matches(/^\d{11}$/),
          })}
          onSubmit={(values) => submitForm(values)}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <>
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3 "
              >
                <div className={input_group}>
                  <label htmlFor="name"> Name :</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Ender your name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div className={`alert alert-danger ${alert}`} role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className={input_group}>
                  <label htmlFor="email"> Email :</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Ender your email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className={`alert alert-danger ${alert}`} role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className={input_group}>
                  <label htmlFor="password"> Password :</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Ender your password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className={`alert alert-danger ${alert}`} role="alert">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className={input_group}>
                  <label htmlFor="rePassword"> RePassword :</label>
                  <input
                    type="password"
                    name="rePassword"
                    className="form-control"
                    id="rePassword"
                    placeholder="Ender rePassword"
                    onChange={handleChange}
                    value={values.rePassword}
                    onBlur={handleBlur}
                  />
                  {errors.rePassword && touched.rePassword && (
                    <div className={`alert alert-danger ${alert}`} role="alert">
                      {errors.rePassword}
                    </div>
                  )}
                </div>

                <div className={input_group}>
                  <label htmlFor="phone"> Phone :</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Ender your phone"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <div className={`alert alert-danger ${alert}`} role="alert">
                      {errors.phone}
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  disabled={!isValid || !dirty || isLoading}
                >
                  {isLoading ? <ScaleLoader color="#fff" /> : "Register"}
                </Button>
              </form>
            </>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Register;
