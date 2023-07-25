import React from "react";
import {
  FooterServicesLinks,
  FooterSocialLinks,
  FooterUsefulLinks,
} from "../../constants/HeaderFooterConstants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Travel Destination Online</h3>
              <p>
                000 Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {FooterUsefulLinks.map(({ className, to, name }, index) => (
                  <li key={index}>
                    <Link to={to} className={className}>
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {FooterServicesLinks.map(({ className, to, name }, index) => (
                  <li key={index}>
                    <Link  to={to} className={className}>
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Travel Destination Online</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          {FooterSocialLinks.map((item, index) => (
            <Link to={item.path} key={index}>
              <i className={item.icon}></i>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
