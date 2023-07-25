import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Perform your form submission or validation logic here
    };

    return (
        <main id="main">
            <section id="contact" className="contact mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right">
                            <div className="section-title text-center">
                                <h2>Login and Get Exploring</h2>
                                <p>Log into your account with your email, or create one below.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-delay="100">
                            <form  className="php-email-form mt-2" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit">Login</button>
                                </div>
                                <br />
                                <Link to={'/signup'}>
                                <p>
                                    Don't have an account? 
                                </p>
                                </Link>
                                
                            </form>
                            <p className="text-center mt-4">or Continue with</p>
                            <div className="row">
                                <div className="col-xl-12 d-flex align-items-center">
                                    <div className="login_icon_boxes">
                                        <div className="row">
                                            <div className="col-xl-4" data-aos="zoom-in" data-aos-delay="100">
                                                <div className="login_icon mt-4 mt-xl-0">
                                                    <i className="bi bi-google"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-4" data-aos="zoom-in" data-aos-delay="200">
                                                <div className="login_icon mt-4 mt-xl-0">
                                                    <i className="bi bi-facebook"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-4" data-aos="zoom-in" data-aos-delay="300">
                                                <div className="login_icon mt-4 mt-xl-0">
                                                    <i className="bi bi-apple"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5">By creating an account, you agree to our <strong>Terms & Conditions, Privacy Policy</strong>, and <strong>Agreement with Us.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginSection;
