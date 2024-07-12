import React from "react";
import registerCSS from "./Register.module.css";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold">Register Form</h2>
            <div className="d-flex align-items-center mb-3">
              <i className=" fs-4 me-2 fab fa-facebook"></i>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Your Name"
                aria-describedby="helpId"
              />
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className=" fs-4 me-2 fab fa-facebook"></i>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Your email"
                aria-describedby="helpId"
              />
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className=" fs-4 me-2 fab fa-facebook"></i>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Your password"
                aria-describedby="helpId"
              />
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className=" fs-4 me-2 fab fa-facebook"></i>
              <input
                type="tel"
                name="phone"
                id="phone"
                class="form-control"
                placeholder="Your phone"
                aria-describedby="helpId"
              />
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className=" fs-4 me-2 fab fa-facebook"></i>
              <input
                type="number"
                name="age"
                id="age"
                class="form-control"
                placeholder="Your age"
                aria-describedby="helpId"
              />
            </div>

            <button type="submit" className="btn btn-primary mb-4">
              {" "}
              Register
            </button>
            <div className="d-flex align-items-center">
              <h6 className="mt-4 mb-0">Have an account ? </h6>

              <Link to={"/login"} className="ms-4 mt-4">
                Sign In
              </Link>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
