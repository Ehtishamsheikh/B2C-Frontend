import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [userType, setUserType] = useState("");

  const showHideFormArea = (event) => {
    const formArea = event.target.value;
    setUserType(formArea);
  };

  return (
    <main id="main">
      <section id="contact" className="contact mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="section-title text-center">
                <h2>SignUp and Get Exploring</h2>
                <p>Register new account in just one click!</p>
              </div>
            </div>

            <div
              className="col-lg-8 m-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form
                action=""
                method="post"
                role="form"
                className="php-email-form mt-2"
              >
                <div className="row">
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <select
                      onChange={showHideFormArea}
                      className="form-control mt-3 mt-md-0"
                      id="registerAs"
                      name="registerAs"
                    >
                      <option value="">
                        Select User Type First and Proceed for Registration
                      </option>
                      <option value="U">Register as User</option>
                      <option value="TA">Register as Travel Agent</option>
                    </select>
                  </div>
                </div>

                {/* User Form */}
                {userType === "U" && (
                  <div className="row" id="userForm">
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-md-12 form-group mt-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        required
                      />
                    </div>

                    <div className="col-md-3 form-group mt-3">
                      <select className="form-control" name="dialingCode">
                        <option value="">Select Dialing Code</option>
                        <option value="92">+92</option>
                        {/* Additional options */}
                      </select>
                    </div>
                    <div className="col-md-9 form-group mt-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="contactNo"
                        id="contactNo"
                        placeholder="Your Contact No (xxx xxxx xxx)"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Travel Agent Form */}
                {userType === "TA" && (
                  <div className="row" id="travelAgentForm">
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="agencyName"
                        id="agencyName"
                        placeholder="Your Agency Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="agencyEmail"
                        id="agencyEmail"
                        placeholder="Your Agency Email"
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="agencyCountry"
                        id="agencyCountry"
                        placeholder="Your Country"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="agencyCity"
                        id="agencyCity"
                        placeholder="Your Agency City"
                        required
                      />
                    </div>

                    <div className="col-md-12 form-group mt-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        required
                      />
                    </div>

                    <div className="col-md-3 form-group mt-3">
                      <select className="form-control" name="dialingCode">
                        <option value="">Select Dialing Code</option>
                        <option value="92">+92</option>
                        <option value="92">+92</option>
                        <option value="92">+92</option>
                        <option value="92">+92</option>
                        <option value="92">+92</option>
                      </select>
                    </div>
                    <div className="col-md-9 form-group mt-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="contactNo"
                        id="contactNo"
                        placeholder="Your Contact No (xxx xxxx xxx)"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button type="submit">Create Account</button>
                </div>
                <br />
                <p>
                  Already have an account? <Link to="/Login">Login</Link>
                </p>
              </form>

             
              <p className="text-center mt-4">or Continue with</p>
              <div className="row">
                <div className="col-xl-12 d-flex align-items-center">
                  <div className="login_icon_boxes">
                    <div className="row">
                      <div
                        className="col-xl-4"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                      >
                        <div className="login_icon mt-4 mt-xl-0">
                          <i className="fa-brands fa-google"></i>
                        </div>
                      </div>
                      <div
                        className="col-xl-4"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                      >
                        <div className="login_icon mt-4 mt-xl-0">
                          <i className="fa-brands fa-facebook"></i>
                        </div>
                      </div>
                      <div
                        className="col-xl-4"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <div className="login_icon mt-4 mt-xl-0">
                          <i className="fa-brands fa-apple"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5">
                By creating an account, you agree to our{" "}
                <strong>Terms & Conditions, Privacy Policy</strong> and{" "}
                <strong>Agreement with Us.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupForm;
