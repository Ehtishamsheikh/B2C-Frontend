import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if needed

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid p-0 text-center position-relative" data-aos="fade-in" data-aos-delay="200">
        <div className="video-container">
          <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active" style={{ backgroundImage: 'url(/img/countries/3.webp)' }}>
                <div className="carousel-container">

                </div>
              </div>

              <div className="carousel-item" style={{ backgroundImage: 'url(/img/countries/bg.jpg)' }}>
                <div className="carousel-container">

                </div>
              </div>

              <div className="carousel-item" style={{ backgroundImage: 'url(/img/countries/airfares-101_0.webp)' }}>
                <div className="carousel-container">

                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>

          </div>

          <div className="content">
            <h1>Find Your Next Tour</h1>
            <div className="hero_inputs">
              <form className="inputs_form">
                <div className="inputs_form_input1">
                  <label>Where To ?</label><br />
                  <input type="text" name="text" placeholder="Search for a place or activity" />
                </div>
                <div className="separation"></div>
                <div className="inputs_form_input2">
                  <label>When ?</label><br />
                  <div className="inputs_form_input2_div">
                    <input type="" name="date" className="date-picker" placeholder="Select Date" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
