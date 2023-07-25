import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { BsReceipt,BsSquareFill,BsAward } from 'react-icons/bs';
import { BiReceipt, BiCube, BiImages } from "react-icons/bi";
const WhyUsSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-left">
            <h2>Why Book With Us?</h2>
          </div>
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-xl-3 d-flex"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    {/* <BiReceipt className='icon' color='#009970'/> */}
                    <i className="bx bx-receipt"></i>
                    <h4>Ultimate flexibility</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 d-flex"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    {/* <BiCube /> */}
                    <i className="bx bx-cube-alt"></i>
                    <h4>Memorable experiences</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 d-flex"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Quality at our core</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 d-flex"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Award-winning support</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
