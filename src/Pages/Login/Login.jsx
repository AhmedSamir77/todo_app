import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.jpg";
import { useFormik } from "formik";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import * as Yup from "yup";

export default function Login() {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  let navigate = useNavigate();

  let validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitLoginForm,
    validationSchema,
  });

  async function submitLoginForm(values) {
    setLoader(true);
    let { data } = await axios
      .post("https://note-sigma-black.vercel.app/api/v1/users/signIn", values)
      .catch((err) => {
        setLoader(false);
        setError(err.response.data.msg);
      });
    console.log(data);

    if (data.msg === "done") {
      localStorage.setItem("userToken", data.token);
      navigate("/");
      setError(null);
      setLoader(false);
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="loginBox d-flex  login-custom">
            <div className="col-md-6 ">
              <img src={loginImg} className="w-100 h-75 mt-5" alt="" />
            </div>
            <div className="col-md-6 pe-4 pt-5 mt-5">
              <h2 className="fw-bold pb-3">Login Form</h2>
              {error && <div className="alert alert-danger">{error}</div>}

              <form action="" onSubmit={formik.handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                  <i class="fs-6 me-2 fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Your email"
                    aria-describedby="helpId"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="alert alert-danger ms-3">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i class="fs-6 me-2 fa-solid fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Your password"
                    aria-describedby="helpId"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="alert alert-danger ms-3">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary mb-4">
                  {loader ? (
                    <Hourglass
                      visible={true}
                      height="30"
                      width="80"
                      ariaLabel="hourglass-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      colors={["#000000", "#000000"]}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className="d-flex align-items-center">
                <h6 className="mt-2 mb-0">Don't an account ? </h6>

                <Link to={"/register"} className="ms-4 mt-2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
