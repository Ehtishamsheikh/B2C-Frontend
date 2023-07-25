import React, { useEffect } from "react";
import Swiper from "swiper";
import Sidebar from "../../components/SideBar/SideBar";

function CheckAvaibilityPage(e) {
  function toggleAvailability() {
    var spinner = document.getElementById("loadingSpinner");
    var accordion = document.getElementById("availabilityAccordion");
    var button = document.querySelector(".btn-pay");

    // button.addEventListener("click", function(event) {
    // e.preventDefault();

    // Scroll to the div
    accordion.scrollIntoView({ behavior: "smooth" });

    // Show the loader after a short delay
    setTimeout(function () {
      spinner.style.display = "flex";
    }, 200);

    // Hide the loader and show the div after a longer delay
    setTimeout(function () {
      spinner.style.display = "none";
      accordion.style.display = "block";
      const element = document.getElementById("mainContent");
      element.scrollIntoView();
    }, 2000);

    // });
  }
  // useEffect(() => {
  //   new Swiper('.portfolio-details-slider', {
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   });
  // }, []);
  useEffect(() => {
    new Swiper(".portfolio-details-slider", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });
  }, []);
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div>
            <h2>All-Inclusive Amsterdam Canal Cruise by Captain Jack</h2>
            <p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
            <p className="country">Amsterdam | Netherlands</p>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section
        id="portfolio-details"
        className="portfolio-details checkAvailbility_slider"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="/img/countries/1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/img/countries/2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/img/countries/1.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-info">
                <h3>
                  <span style={{ fontWeight: 200, fontSize: 13 }}>from</span>{" "}
                  $43.38
                </h3>
                <p style={{ marginTop: -20, fontSize: 13 }}>
                  Lowest Price Gurantee
                </p>
                <h3>Select Date and Travelers</h3>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div className="details_inputs">
                    <input
                      type="date"
                      name="date"
                      className="date-picker"
                      placeholder="Select Date"
                    />
                    <br />
                  </div>
                  <div className="details_inputs_options">
                    <div>
                      <select
                        id="inputState"
                        className="form-select details_inputs_options_select"
                        required
                      >
                        <option selected>1 Adult</option>
                        <option>2 Adult</option>
                        <option>3 Adult</option>
                      </select>
                    </div>
                    <div>
                      <select
                        id="inputState"
                        className="form-select details_inputs_options_select"
                        required
                      >
                        <option selected>1 Child</option>
                        <option>2 Child</option>
                        <option>3 Child</option>
                      </select>
                    </div>
                    <div>
                      <select
                        id="inputState"
                        className="form-select details_inputs_options_select"
                        required
                      >
                        <option selected>1 Infant</option>
                        <option>2 Infant</option>
                        <option>3 Infant</option>
                      </select>
                    </div>
                  </div>
                  <div className="pay_btn">
                    {/* <button className="btn-pay" onClick={toggleAvailability}>Check Availability</button> */}
                    <a
                      href="javascript:;"
                      style={{ display: "block" }}
                      className="btn-pay"
                      onClick={(e) => toggleAvailability(e)}
                    >
                      Check Availability
                    </a>
                  </div>
                  <div
                    className="loading-spinner"
                    id="loadingSpinner"
                    style={{ display: "none" }}
                  ></div>
                  {/* <div className="pay_btn">
                  <a href="#about" className="btn-pay">Pay Now</a>
                  <a href="#about" className="btn-pay">Book a Call Back</a>
                </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lists" class="lists">
        <div class="container">
          <div class="row">
                <Sidebar/>
            <div
              id="mainContent"
              className="col-lg-9 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-12 align-items-stretch">
                    {/* check Availibility Accordin */}
                    <div
                      className="checkAvailbility_accordinBox mt-4 mb-4 mt-xl-0 d-flex"
                      id="availabilityAccordion"
                      style={{ display: "none!important" }}
                    >
                      <div className="col-lg-8 col-12 checkAvailbility_accordinBox_div1">
                        <h5>Premium Full Experience</h5>
                        <p>
                          Duration: 5 hours
                          <br />
                          This option includes: Dock Fee (15 USD) Hotel pick-up
                          Premium open bar and Box lunch A bigger and more
                          luxurious catamaran.
                        </p>
                        <p>
                          Starting point:
                          <br />
                          Marina Las Perlas, Hotel Imperial las perlas Km 2.5,
                          Kukulcan Boulevard, Zona Hotelera, 77500 Cancún, Q.R.,
                          Mexico
                          <br />
                          Pickup included
                        </p>
                        <div className="checkAvailbility_accordinBox_div1_timeBtns">
                          <p>8:30 am</p>
                          <p>11:00 am</p>
                          <p>2:30 pm</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 checkAvailbility_accordinBox_div2">
                        <p>Includes 0 Payment Free</p>
                        <h4>
                          <span>Rs.</span>
                          <strong> 172,501</strong>
                        </h4>
                        <p>Total Price</p>
                        <div className="checkAvailbility_payBtns">
                          <a
                            href="payNow.html"
                            className="btn_pay_checkAvailibility"
                          >
                            Pay Now
                          </a>
                          <a
                            href="bookCallBack.html"
                            className="btn_pay_checkAvailibility"
                          >
                            Book a Call Back
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* check Availibility Accordin ends */}
                    <h3>Overview</h3>
                    <p>
                      Cruising the canals of Amsterdam is a must for first-time
                      visitors to the city. This family-friendly cruise provides
                      a personalized experience with a small boat and a maximum
                      of 20 passengers on-board. Get to know each other as you
                      sip drinks, tuck into snacks, and enjoy entertaining
                      commentary from Captain Jack. Cruise around the
                      UNESCO-listed canal ring, spot landmarks including the
                      Rijksmuseum and the Anne Frank House, and hear fun facts
                      and stories about Amsterdam as you discover the city.
                    </p>
                    <ul>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                    </ul>
                    <hr />

                    <h3>Additional Info</h3>
                    <p>
                      Cruising the canals of Amsterdam is a must for first-time
                      visitors to the city. This family-friendly cruise provides
                      a personalized experience with a small boat and a maximum
                      of 20 passengers on-board. Get to know each other as you
                      sip drinks, tuck into snacks, and enjoy entertaining
                      commentary from Captain Jack. Cruise around the
                      UNESCO-listed canal ring, spot landmarks including the
                      Rijksmuseum and the Anne Frank House, and hear fun facts
                      and stories about Amsterdam as you discover the city.
                    </p>
                    <ul>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                    </ul>
                    <hr />

                    <h3>Cancellation Policy</h3>
                    <p>
                      Cruising the canals of Amsterdam is a must for first-time
                      visitors to the city. This family-friendly cruise provides
                      a personalized experience with a small boat and a maximum
                      of 20 passengers on-board. Get to know each other as you
                      sip drinks, tuck into snacks, and enjoy entertaining
                      commentary from Captain Jack. Cruise around the
                      UNESCO-listed canal ring, spot landmarks including the
                      Rijksmuseum and the Anne Frank House, and hear fun facts
                      and stories about Amsterdam as you discover the city.
                    </p>
                    <ul>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                      <li>
                        Fantastic views as you cruise Amsterdam’s famous canals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckAvaibilityPage;
