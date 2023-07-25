import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import Sidebar from "../../../components/SideBar/SideBar";
import Listing from "../../../components/ListingForPackage/ListingForPackage";

const Testimonials = () => {
  useEffect(() => {
    const testimonialsSlider = new Swiper(".testimonials-slider", {
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
      autoplay: {
        delay: 500,
      },
    });
  }, []);

  return (
    <>
      <section
        id="testimonials"
        className="testimonials section-bg"
        style={{ marginTop: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="section-title text-center" data-aos="fade-left">
              <h2>Tours, Tickets & Excursions</h2>
            </div>
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <div
                className="testimonials-slider swiper"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="swiper-wrapper" style={{ gap: "20px" }}>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Cruises & Sailing</h3>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Day Trips</h3>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Canal Cruises</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Water Tours</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Private and Luxury</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Walking Tours</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Day Tours</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Historical Tours</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>City Tours</h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src="/img/listing-images/4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Unique Experiences</h3>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 1"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 2"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 3"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 4"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 5"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 6"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 7"
                  ></span>
                  <span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 8"
                    aria-current="true"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 9"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 10"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lists" class="lists">
        <div class="container">
          <div class="row">
            <Sidebar />
            <div className="col-lg-9 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <Listing/>
                  <Listing/>
                  <Listing/>
                  <Listing/>
                  <Listing/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
