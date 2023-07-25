import React from 'react';

const UmrahCard = () => {
  return (
    <div className="box">
      <h3>April, May / Shawal</h3>
      <h4>
        <sup>$</sup>500<span> / per pilgrim</span>
      </h4>
      <ul>
        <li>Flight</li>
        <li>VISA</li>
        <li>Transfer</li>
        <li>Breakfast</li>
        <li>Hotel</li>
      </ul>
      <div className="btn-wrap">
        <a href="#" className="btn-buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

const UmrahPackages = () => {
  return (
    <section id="umrah_cards pricing" className="umrah_cards pricing">
      <div className="container">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-left">
            <h2>See our Umrah Packages</h2>
          </div>

          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-12 d-flex"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <UmrahCard />
            </div>
            <div
              className="col-xl-6 col-lg-6 col-12 d-flex mt-lg-0 mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <UmrahCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahPackages;
