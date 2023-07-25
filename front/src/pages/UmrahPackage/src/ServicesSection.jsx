import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title" data-aos="fade-right">
              <h2>What Can We Offer?</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="img/countries/airfares-101_0.webp" className="more-about-img" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <ServiceItem icon="fa-solid fa-handshake" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4 mt-lg-0" title="Companion / Friend" />
              <ServiceItem icon="fa-solid fa-plane-up" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4 mt-lg-0" title="Flights" />
              <ServiceItem icon="fa-solid fa-car" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4 mt-lg-0" title="Transport" />
              <ServiceItem icon="fa-solid fa-bed" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Accommodation" />
              <ServiceItem icon="fa-solid fa-award" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Professionalism" />
              <ServiceItem icon="fa-solid fa-passport" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Visa" />
              <ServiceItem icon="fa-solid fa-flag" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Tour Guide" />
              <ServiceItem icon="fa-sharp fa-solid fa-headset" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Customer Service" />
              <ServiceItem icon="fa-solid fa-circle-question" wrapper="col-md-4 col-6 d-flex align-items-stretch mt-4" title="Support" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon,wrapper, title }) => {
  return (
    <div className={wrapper}>
      <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4>
          <a href="" style={{textDecoration:"none",fontSize:"17px"}}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default ServicesSection;
