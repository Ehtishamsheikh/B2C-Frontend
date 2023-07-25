import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class AboutSection extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="row content">
            <div className="col-lg-6 col-12 about_image" data-aos="fade-right" data-aos-delay="100">
              <img src="/img/countries/banner-lg.png" style={{ width: '100%' }} alt="About" />
            </div>
            <div className="col-lg-6 col-12 pt-4 pt-lg-0 text-center" data-aos="fade-left" data-aos-delay="200">
              <h2>WIN your Wishlist!</h2>
              <h3>Want to win US$7,000 towards your dream getaway? We thought you might. Just make a Viator Wishlist to enter.</h3>
              <a href="#about" className="btn-win col-12 text-center">Enter to Win</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;