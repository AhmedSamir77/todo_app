import React, { useState } from "react";
import registerCSS from "./Register.module.css";
import { FormControl, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/register.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
export default function Register() {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  let navigate = useNavigate();

  let validationSchema = Yup.object({
    name: Yup.string().required("name is required").min(3),
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .matches(/[A-Z][a-z0-9]{3,}/, "password is invalid"),
    age: Yup.number()
      .required("Age is required")
      .min(0, "Age must be a positive number")
      .max(120, "Age must be less than 120"),
    phone: Yup.string()
      .required()
      .matches(/^(?:\+?0)?1[0-9]{9}$/, "phone number is invalid"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    onSubmit: submitRegisterForm,
    validationSchema,
  });

  async function submitRegisterForm(values) {
    setLoader(true);
    let { data } = await axios
      .post("https://note-sigma-black.vercel.app/api/v1/users/signUp", values)
      .catch((err) => {
        setLoader(false);
        setError(err.response.data.msg);
      });
    console.log(data);

    if (data.msg === "done") {
      setLoader(false);
      setError(null);
      navigate("/login");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="registerBox d-flex  register-custom">
            <div className="col-md-6 ps-4 pt-5 mt-3">
              <h2 className="fw-bold pb-3">Register Form</h2>
              {error && <div className="alert alert-danger">{error}</div>}

              <form action="" onSubmit={formik.handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                  <i class="fs-6 me-2 fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control "
                    placeholder="Your Name"
                    aria-describedby="helpId"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                 
                  {formik.errors.name && formik.touched.name && (
                    <div className="alert alert-danger ms-3">
                      {formik.errors.name}
                    </div>
                  )}
                </div>

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

                <div className="d-flex align-items-center mb-3">
                  <i class="fs-6 me-2 fa-solid fa-phone"></i>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="form-control"
                    placeholder="Your phone"
                    aria-describedby="helpId"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="alert alert-danger ms-3">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i class="fs-6 me-2 fa-solid fa-calendar-days"></i>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    class="form-control"
                    placeholder="Your age"
                    aria-describedby="helpId"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.age && formik.touched.age && (
                    <div className="alert alert-danger ms-3">
                      {formik.errors.age}
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
                    "Register"
                  )}
                </button>
              </form>

              <div className="d-flex align-items-center pb-5">
                <h6 className="mt-4 mb-0">Have an account ? </h6>

                <Link to={"/login"} className="ms-4 mt-4">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img src={registerImg} className="w-100 h-75 mt-5" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
