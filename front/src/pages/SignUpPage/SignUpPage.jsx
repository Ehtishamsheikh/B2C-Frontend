import React, { useState } from 'react';

const SignUpPage = () => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <section id="contact" className="contact mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-right">
            <div className="section-title text-center">
              <h2>SignUp and Get Exploring</h2>
              <p>Register new account in just one click!</p>
            </div>
          </div>

          <div className="col-lg-8 m-auto" data-aos="fade-up" data-aos-delay="100">
            <form action="" method="post" role="form" className="php-email-form mt-2">
              <div className="row">
                <div className="col-md-12 form-group mt-3 mt-md-0">
                  <select
                    onChange={handleUserTypeChange}
                    className="form-control mt-3 mt-md-0"
                    id="registerAs"
                    name="registerAs"
                  >
                    <option value="">Select User Type First and Proceed for Registration</option>
                    <option value="U">Register as User</option>
                    <option value="TA">Register as Travel Agent</option>
                  </select>
                </div>
              </div>

              <div className="row" id="userForm">
                {userType === 'U' && (
                  <>
                    <div className="col-md-6 form-group mt-3">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>

                    {/* Other user form fields */}
                  </>
                )}

                {userType === 'TA' && (
                  <>
                    <div className="col-md-6 form-group mt-3">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>

                    {/* Other travel agent form fields */}
                  </>
                )}
              </div>

              {/* Submit button and other form elements */}

              <p>Already have an account? <a href="login.html">Login</a></p>
            </form>

            {/* Continue with social login icons */}

            <p className="mt-5">By creating an account, you agree to our <strong>Terms & Conditions, Privacy Policy</strong>, and <strong>Agreement with Us.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;