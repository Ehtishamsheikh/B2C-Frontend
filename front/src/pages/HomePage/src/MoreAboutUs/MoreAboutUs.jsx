import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_US_TEXT,
  BOOK_NOW_TEXT,
  LIST_ITEMS,
  TRIP_DESCRIPTION,
  TRIP_TITLE,
} from "../../../../constants/AboutUsConstants";
import { AboutComponent } from "../../../../components/MoreAbout/MoreAbout";

const AboutUsSection = () => {

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-left">
          <h2>{ABOUT_US_TEXT}</h2>
        </div>

        <AboutComponent url={"/img/countries/airfares-101_0.webp"}>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>{TRIP_TITLE}</h2>
            <h5>{TRIP_DESCRIPTION}</h5>
            <ul>
              {LIST_ITEMS.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link to="/booking" className="btn-win">
              {BOOK_NOW_TEXT}
            </Link>
          </div>
        </AboutComponent>
      </div>
    </section>
  );
};

export default AboutUsSection;