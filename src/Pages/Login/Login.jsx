import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>

     <div className="container">
        <div className="row">
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6">
          <h2 className='fw-bold'>Login Form</h2>
          

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

           

          

            <button type="submit" className="btn btn-primary mb-4">
              {" "}
              Register
            </button>
            <div className="d-flex align-items-center">
              <h6 className="mt-4 mb-0">Don't an account ? </h6>

              <Link to={"/register"} className="ms-4 mt-4">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
